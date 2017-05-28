define([
        'jquery',
        'lodash',
        '../util/find-get-param.js',
    ], function($, _, FindGetParam) {
    var Github = function() {
        var myself = this;
    };
    Github.authToken = FindGetParam('token');
    Github.username = FindGetParam('username');
    if (!Github.authToken || !Github.username) {
        throw 'Need to set GET request with "token" and "username".';
    }

    var rootURL = 'https://api.github.com';
    var organizationName = 'The-Brains';
    var databaseStorageRepoName = 'database-storage';

    Github.getData = function(key) {
        var my_atob = atob;
        return $.ajax({
            url: `${rootURL}/repos/${organizationName}/${databaseStorageRepoName}`
                + `/contents/data/${key}.json`,
            beforeSend: function(xhr) {
              xhr.setRequestHeader(
                "Authorization",
                "Basic " + btoa(`${Github.username}:${Github.authToken}`));
            },
            type: 'GET',
        })
        .then(function(data) {
            var content = my_atob(data.content);
            var parsed = $.parseJSON(content);
            return Promise.resolve({
                data: parsed,
                sha: data.sha
            });
        })
        .catch(function(error) {
            if (error.statusText === 'Not Found') {
                return Promise.resolve({
                    data: null,
                    sha: null,
                });
            }

            return Promise.reject(error);
        });
    };

    Github.setData = function(key, value) {
        var my_atob = atob;

        return Github.getData(key).then(function(data) {
            if (_.isEqual(value, data.data)) {
                return Promise.resolve({
                    data: value,
                    sha: data.sha,
                });
            }

            var content = btoa(JSON.stringify(value));
            var url = `${rootURL}/repos/${organizationName}/${databaseStorageRepoName}`
                + `/contents/data/${key}.json`
            var data = JSON.stringify({
                message: `Creating key/value for key: '${key}'`,
                content: content,
                sha: data.sha
            });
            var headers = {};

            return $.ajax({
                url: url,
                beforeSend: function(xhr) {
                  xhr.setRequestHeader(
                    "Authorization",
                    "Basic " + btoa(`${Github.username}:${Github.authToken}`));
                },
                dataType: 'json',
                method: 'PUT',
                headers: headers,
                data: data,
            })
            .then(function(data) {
                return Promise.resolve({
                    data: value,
                    sha: data.content.sha
                });
            });
        });
    };

    return Github;
});
