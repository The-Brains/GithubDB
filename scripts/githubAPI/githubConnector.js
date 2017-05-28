define(['jquery', 'lodash', 'gh3'], function($, _, Gh3) {
    var Github = function() {
        var myself = this;
    };

    Github.master = null;
    Github.repo = null;
    Github.directory = null;
    var rootURL = 'https://api.github.com';
    var organizationName = 'The-Brains';
    var databaseStorageRepoName = 'database-storage';

    Github.getRepos = function() {
        return $.getJSON(`${rootURL}/orgs/${organizationName}/repos`);
    };

    Github.getReposNames = function() {
        return Github.getRepos().then(function(data) {
            return _.map(data, function(repo) {
                return _.replace(repo.full_name, `${organizationName}/`, '');
            });
        })
    };

    Github.getDatabaseRepo = function() {
        return new Promise(function(resolve, reject) {
            if (Github.repo) {
                resolve(Github.repo);
                return;
            }

            var k33g = new Gh3.User(organizationName);
            var k33gRepo = new Gh3.Repository(databaseStorageRepoName, k33g);
            k33gRepo.fetch(function (err, res) {
                if(err) {
                    reject(err);
                    return;
                }

                Github.repo = k33gRepo;
                resolve(Github.repo);
            });
        });
    };

    Github.getMasterBranch = function() {
        return new Promise(function(resolve, reject) {
            if (Github.master) {
                resolve(Github.master);
                return;
            }

            return Github.getDatabaseRepo()
            .then(function(repo) {
                repo.fetchBranches(function (err, res) {
                    if(err) {
                        reject(err);
                        return;
                    }

                    Github.master = repo.getBranchByName("master");
                    resolve(Github.master);
                });
            });
        });
    };

    Github.getDataFolder = function() {
        return new Promise(function(resolve, reject) {
            if (Github.directory) {
                resolve(Github.directory);
                return;
            }

            return Github.getMasterBranch()
            .then(function(master) {
                master.fetchContents(function (err, res) {
                    if(err) {
                        reject(err);
                        return;
                    }

                    var dir =  master.getDirByName('data');

                    dir.fetchContents(function (err, res) {
                        if(err) {
                            reject(err);
                            return;
                        }

                        // console.log(dir.getContents());
                        // dir.eachContent(function (content) {
                        //     console.log(content.name, content.type, content.size);
                        // });

                        Github.directory = dir;
                        resolve(Github.directory);
                    });
                });
            });
        });
    };

    Github.getData = function(key) {
        return new Promise(function(resolve, reject) {
            var fileName = `${key}.json`;

            return Github.getDataFolder()
            .then(function(directory) {
                var myfile = directory.getFileByName(fileName);

                myfile.fetchContent(function (err, res) {
                    if(err) {
                        reject(err);
                        return;
                    }

                    var rawData = myfile.getRawContent();
                    resolve($.parseJSON(rawData));
                });
            });
        });
    };

    return Github;
});
