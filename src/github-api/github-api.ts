// To recognize dom types (see https://bun.sh/docs/typescript#dom-types):
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

const mimeTypes = require('mimetypes');
import { compare } from "./util/compare";

const EXTENSION_REGEX = /\.\w+/;

export interface DataOptions {
  repo?: {
    name: string;
    owner: string;
  };
}

export interface SetDataOptions extends DataOptions {
  retries?: number;
  branch?: string;
  externalUsername?: string;
  committer?: {
    name: string;
    email: string;
    date?: string;
  };
  author?: {
    name: string;
    email: string;
    date?: string;
  };
}

enum DataType {
  OBJECT = "object",
  BLOB = "blob",
}

export class GithubApi {
  authToken: string;
  username: string;
  rootURL: string;
  organizationName: string;
  databaseStorageRepoName: string;
  constructor({
    authToken,
    username,
    rootURL = 'https://api.github.com',
    organizationName = 'The-Brains',
    databaseStorageRepoName = 'database-storage',
  }: {
    authToken: string;
    username: string;
    rootURL?: string;
    organizationName?: string;
    databaseStorageRepoName?: string;
  }) {
    this.authToken = authToken;
    this.username = username;
    this.rootURL = rootURL;
    this.organizationName = organizationName;
    this.databaseStorageRepoName = databaseStorageRepoName;

    if (!this.authToken || !this.username) {
      throw 'Need to set GET request with "token" and "username".';
    }
  }

  get headers() {
    return {
      accept: "application/vnd.github+json",
      Authorization: this.getHeaderAuthorization(),
    };
  }

  getHeaderAuthorization() {
    return "Basic " + btoa(`${this.username}:${this.authToken}`);
  }

  private async listKeysSub(sha: string, subfolder: string): Promise<{ key: string; type: string; sha: string }[]> {
    const path = `git/trees/${sha}`;
    const url = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${path}`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });
    const data: { tree?: { path: string; type: string; sha: string }[] } = await response.json();
    console.log(">>", subfolder, data.tree);
    if (subfolder.length) {
      const [subDir, ...rest] = subfolder.split("/");
      const sha = data.tree?.find((t) => t.path === subDir && t.type === "tree")?.sha;
      return sha ? await this.listKeysSub(sha, rest.join("/")) : [];
    } else {
      console.log(data.tree);
      return data.tree?.map(({ path, type, sha }) => ({ key: path, type, sha })) ?? [];
    }
  }

  async listKeys(subfolder?: string, branch: string = "main", recursive: boolean = true) {
    if (!recursive) {
      return await this.listKeysSub(branch, subfolder?.length ? "data/" + (subfolder ?? "") : "data");
    }

    const path = `git/trees/${branch}?recursive=1`;
    const url = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${path}`;

    const response = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });
    const data: { tree?: { path: string; type: string; sha: string }[] } = await response.json();
    return data.tree
      ?.filter((t) => t.path.indexOf(`data/${subfolder ?? ""}`) === 0)
      .map(({ path, type, sha }) => ({ key: path.split('data/')[1], type, sha })) ?? [];
  }

  async getData(key: string, options: DataOptions = {}) {
    const organizationName = options.repo?.owner ?? this.organizationName;
    const databaseStorageRepoName = options.repo?.name ?? this.databaseStorageRepoName;

    const extension = key.match(EXTENSION_REGEX)?.[0];
    const path = `contents/data/${key}${extension ? "" : ".json"}`;
    const url = `${this.rootURL}/repos/${organizationName}/${databaseStorageRepoName}/${path}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.headers,
      });
      const data: any = await response.json();
      const ext = extension?.toLocaleLowerCase();
      const type = ext === ".json" || !ext ? DataType.OBJECT : DataType.BLOB;

      if (data.content) {
        switch (type) {
          case DataType.OBJECT:
            {
              const content = atob(data.content);
              return {
                type,
                data: JSON.parse(content),
                sha: data.sha,
                size: data.size,
                url: data.download_url,
              };
            }
          case DataType.BLOB:
            {
              const mimeType = mimeTypes.detectMimeType(extension);
              const response = await fetch(`data:${mimeType};base64,${data.content.replaceAll('\n', '')}`);
              return {
                type,
                data: await response.blob(),
                sha: data.sha,
                size: data.size,
                url: data.download_url,
              };
            }
        }
      } else if (data.message === "Not Found") {
        return {
          data: null, sha: null,
        }
      } else {
        return {
          type,
          data: null,
          sha: data.sha,
          message: data.message,
          url: data.download_url,
          size: data.size,
        }
      }
    } catch (e: any) {
      if (e.responseJSON?.message === "Not Found") {
        return {
          data: null, sha: null,
        }
      } else {
        throw e;
      }
    }
  }

  private async makeBase64Blob(blob: Blob): Promise<string> {
    if (typeof window !== 'undefined' && typeof window.FileReader !== 'undefined') {
      // Browser environment
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const uri = reader.result as string;
          if (uri.indexOf('data:') === 0) {
            resolve(uri.split(',')[1]);
          } else {
            reject(new Error('Failed to convert Blob to Base64'));
          }
        };
        reader.onerror = () => {
          reject(new Error('Failed to read Blob'));
        };
      });
    } else if (typeof Buffer !== 'undefined') {
      // Node.js environment
      const buffer = await blob.arrayBuffer();
      return Buffer.from(buffer).toString('base64');
    } else {
      throw new Error('Unsupported environment');
    }
  }

  /**
   * 
   * @param key where to store the data. ex: "subdir/my-key".
   * @param valueOrCall the value to set it to, or a callback which takes the old data and return the new data.
   * @param retries number of retries in case of failure, default 3
   * @returns 
   */
  async setData<T extends Object>(key: string, valueOrCall: T | ((prev: any) => Promise<T>), options: SetDataOptions = {}): Promise<any> {
    const organizationName = options.repo?.owner ?? this.organizationName;
    const databaseStorageRepoName = options.repo?.name ?? this.databaseStorageRepoName;

    const data = await this.getData(key, options);
    const value = typeof (valueOrCall) === "function" ? await valueOrCall(data) : valueOrCall;

    if (data.data) {
      if (await compare(value, data.data)) {
        return data;
      }
    }
    const hasExtension = EXTENSION_REGEX.test(key);
    const path = `contents/data/${key}${hasExtension ? "" : ".json"}`;
    const isBlob = value instanceof Blob;
    const content = value === null ? null : isBlob ? await this.makeBase64Blob(value) : btoa(JSON.stringify(value, null, 2));
    const url = `${this.rootURL}/repos/${organizationName}/${databaseStorageRepoName}/${path}`;

    const newData = JSON.stringify({
      message: `Creating key/value for key: '${key}'`,
      content: content,
      sha: data.sha,
      branch: options?.branch,
      committer: options?.committer ?? {
        name: `GithubDB ${options?.externalUsername ?? ""}[bot]`,
        email: `${options?.externalUsername ? options?.externalUsername : "user"}+GithubDB[bot]@users.noreply.github.com`,
      },
      author: options?.author,
    });
    const response = await fetch(url, {
      method: content === null || content === undefined ? "DELETE" : "PUT",
      headers: this.headers,
      body: newData,
    });
    const jsonResponse: any = await response.json();
    const numRetries = (options?.retries ?? 3);
    if (!jsonResponse.content && numRetries > 0) {
      console.warn(`Commit failed. Retries: ${numRetries}`, jsonResponse);
      //  Commit failed, possibly due to another merge in between. Try this again
      return this.setData(key, valueOrCall, { ...options, retries: numRetries - 1 });
    }
    return {
      data: value,
      sha: jsonResponse.content?.sha,
    };
  }
}
