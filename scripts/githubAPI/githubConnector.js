define([
        '../util/find-get-param.js',
        '../../dist/index.js',
    ], function(FindGetParam, {GithubApi}) {
      const authToken = FindGetParam('token')
      const username = FindGetParam('username')
      const rootURL = 'https://api.github.com';
      const organizationName = FindGetParam('owner') ?? 'The-Brains';
      const databaseStorageRepoName = FindGetParam('repo') ?? 'database-storage';

      const api = new GithubApi({
        rootURL,
        organizationName,
        databaseStorageRepoName,
        authToken,
        username,
      });

    var Github = function() {
        var myself = this;
    };
    Github.authToken = api.authToken;
    Github.username = api.username;
    if (!Github.authToken || !Github.username) {
        throw 'Need to set GET request with "token" and "username".';
    }

    Github.getData = function(key) {
        return api.getData(key);
    };

    Github.setData = function(key, value) {
        return api.setData(key, value);
    };

    Github.listKeys = function(prefix) {
        return api.listKeys(prefix);
    }

    return Github;
});
