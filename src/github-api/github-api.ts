// To recognize dom types (see https://bun.sh/docs/typescript#dom-types):
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

const deepEqual = require("deep-equal");
const mimeTypes = require('mimetypes');

const EXTENSION_REGEX = /\.\w+/;

interface SetDataOptions {
  retries: number;
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

  headerAuthorization() {
    return "Basic " + btoa(`${this.username}:${this.authToken}`);
  }

  async getData(key: string) {
    const extension = key.match(EXTENSION_REGEX)?.[0];
    const path = `contents/data/${key}${extension ? "" : ".json"}`;
    const url = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${path}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: this.headerAuthorization(),
        },
      });
      const data: any = await response.json();
      if (data.content) {
        switch(extension?.toLocaleLowerCase()) {
          case ".json":
          case undefined:
            {
              const content = atob(data.content);
              return {
                data: JSON.parse(content),
                sha: data.sha,
              };  
            }
          default:
            {
              const types = mimeTypes.detectMimeType(extension);
              const response = await fetch(`data:${types};base64,${data.content}`);
              return {
                data: await response.blob(),
                sha: data.sha,
              };
            }
        }
      } else if (data.message === "Not Found") {
        return {
          data: null, sha: null,
        }
      } else {
        throw new Error("Unable to parse response.");
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

  private async makeBase64Blob(blob: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        const uri = reader.result;
        if (typeof(uri) === "string" && uri.indexOf("data:") === 0) {
          resolve(uri.split(",")[1]);
        } else {
          resolve(uri);
        }
      };
    });
  }

  /**
   * 
   * @param key where to store the data. ex: "subdir/my-key".
   * @param valueOrCall the value to set it to, or a callback which takes the old data and return the new data.
   * @param retries number of retries in case of failure, default 3
   * @returns 
   */
  async setData<T extends Object>(key: string, valueOrCall: T | ((prev: any) => Promise<T>), options?: SetDataOptions): Promise<any> {
    const data = await this.getData(key);
    const value = typeof(valueOrCall) === "function" ? await valueOrCall(data) : valueOrCall;

    if (data.data) {
      if (deepEqual(value, data.data)) {
        return data;
      }  
    }
    const hasExtension = EXTENSION_REGEX.test(key);
    const path = `contents/data/${key}${hasExtension ? "" : ".json"}`;
    const isBlob = value instanceof Blob;
    const content = isBlob ? await this.makeBase64Blob(value) : btoa(JSON.stringify(value));
    const url = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${path}`;

    const newData = JSON.stringify({
        message: `Creating key/value for key: '${key}'`,
        content: content,
        sha: data.sha,
        branch: options?.branch,
        committer: options?.committer ?? {
          name: "GithubDB[bot]",
          email: `${options?.externalUsername ?? "user"}+GithubDB[bot]@users.noreply.github.com`,
        },
        author: options?.author,
    });
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        accept: "application/vnd.github+json",
        Authorization: this.headerAuthorization(),
      },
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
