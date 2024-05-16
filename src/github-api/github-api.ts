import {isEqual} from "lodash"

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
    const path = `contents/data/${key}.json`;
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
        const content = atob(data.content);
        const parsed = JSON.parse(content);
        return {
          data: parsed,
          sha: data.sha,
        };  
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

  async setData(key: string, value: any) {
    const data = await this.getData(key);
    if (isEqual(value, data.data)) {
      return data;
    }
    const content = btoa(JSON.stringify(value));
    const path = `contents/data/${key}.json`;
    const url = `${this.rootURL}/repos/${this.organizationName}/${this.databaseStorageRepoName}/${path}`;

    const newData = JSON.stringify({
        message: `Creating key/value for key: '${key}'`,
        content: content,
        sha: data.sha
    });
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: this.headerAuthorization(),
      },
      body: newData,
    });
    const jsonResponse: any = await response.json();
    return {
      data: value,
      sha: jsonResponse.content.sha,
    };
  }
}
