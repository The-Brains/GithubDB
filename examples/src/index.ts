import { GithubApi } from "@the-brains/github-db";

export const DEFAULT_OPTIONS = {
  username: "jacklehamster",
  authToken: "",
  organizationName: "jacklehamster",
  databaseStorageRepoName: "github-datastore",
};

interface Options {
  username: string;
  authToken: string;
  organizationName: string;
  databaseStorageRepoName: string;
}

export async function getData(key: string, options?: Options)  {
  const api = new GithubApi({ ...DEFAULT_OPTIONS, ...options});
  return api.getData(key);
}

export async function setData(key: string, value: any, options?: Options) {
  const api = new GithubApi({ ...DEFAULT_OPTIONS, ...options});
  return api.setData(key, value);
}
