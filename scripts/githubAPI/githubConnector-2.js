define([
        'jquery',
        'lodash',
        '../util/find-get-param.js',
        'octokat',
    ], function($, _, FindGetParam, Octokat) {
    var Github = function() {
        var myself = this;
    };
    Github.authToken = FindGetParam('token');
    Github.username = FindGetParam('username');
    Github.octo = new Octokat({
        // token: Github.authToken,
    });

    Github.master = null;
    Github.repo = null;
    Github.directory = null;
    var rootURL = 'https://api.github.com';
    var organizationName = 'The-Brains';
    var databaseStorageRepoName = 'database-storage';

    // Github.getRepos = function() {
    //     return $.getJSON(`${rootURL}/orgs/${organizationName}/repos`);
    // };

    // Github.getReposNames = function() {
    //     return Github.getRepos().then(function(data) {
    //         return _.map(data, function(repo) {
    //             return _.replace(repo.full_name, `${organizationName}/`, '');
    //         });
    //     })
    // };

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

    // Github.getDatabaseRepo = function() {
    //     return new Promise(function(resolve, reject) {
    //         if (Github.repo) {
    //             resolve(Github.repo);
    //             return;
    //         }

    //         var octo = new Octokat()
    //         var repo = octo.repos(organizationName, databaseStorageRepoName);
    //         debugger;
    //         repo.contents('README.md').fetch()
    //         .then((info) => {
    //             debugger;
    //             console.log(info.sha, info.content)
    //         })
    //         .catch((error) => {
    //             debugger;
    //         });

    //         // Github.octo.zen.read((err, message) => {
    //         //     if(err) {
    //         //         reject(err);
    //         //         return;
    //         //     }

    //         //     debugger;
    //         // });
    //         // Github.octo.repos('The-Brains/database-storage') //`${organizationName}/${databaseStorageRepoName}`)
    //         // .fetch(function(err, val) {
    //         //     if(err) {
    //         //         reject(err);
    //         //         return;
    //         //     }

    //         //     debugger;
    //         // });
    //     });
    // };

    // Github.getMasterBranch = function() {
    //     return new Promise(function(resolve, reject) {
    //         if (Github.master) {
    //             resolve(Github.master);
    //             return;
    //         }

    //         return Github.getDatabaseRepo()
    //         .then(function(repo) {
    //             repo.fetchBranches(function (err, res) {
    //                 if(err) {
    //                     reject(err);
    //                     return;
    //                 }

    //                 Github.master = repo.getBranchByName("master");
    //                 resolve(Github.master);
    //             });
    //         });
    //     });
    // };

    // Github.getDataFolder = function() {
    //     return new Promise(function(resolve, reject) {
    //         if (Github.directory) {
    //             resolve(Github.directory);
    //             return;
    //         }

    //         return Github.getMasterBranch()
    //         .then(function(master) {
    //             master.fetchContents(function (err, res) {
    //                 if(err) {
    //                     reject(err);
    //                     return;
    //                 }

    //                 var dir =  master.getDirByName('data');

    //                 dir.fetchContents(function (err, res) {
    //                     if(err) {
    //                         reject(err);
    //                         return;
    //                     }

    //                     // console.log(dir.getContents());
    //                     // dir.eachContent(function (content) {
    //                     //     console.log(content.name, content.type, content.size);
    //                     // });

    //                     Github.directory = dir;
    //                     resolve(Github.directory);
    //                 });
    //             });
    //         });
    //     });
    // };

    // Github.getData = function(key) {
    //     return new Promise(function(resolve, reject) {
    //         var fileName = `${key}.json`;

    //         return Github.getDataFolder()
    //         .then(function(directory) {
    //             var myfile = directory.getFileByName(fileName);

    //             myfile.fetchContent(function (err, res) {
    //                 if(err) {
    //                     reject(err);
    //                     return;
    //                 }

    //                 var rawData = myfile.getRawContent();
    //                 resolve($.parseJSON(rawData));
    //             });
    //         });
    //     });
    // };

    return Github;
});
