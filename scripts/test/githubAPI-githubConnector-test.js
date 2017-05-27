define(
    ['chai', './test-wrapper.js', '../githubAPI/githubConnector.js'],
    function(chai, testWrapper, GithubConnector) {
        var expect = chai.expect;
        var mainName = 'githubAPI-githubConnector';

        testWrapper.execTest(mainName, 'should return all correct repos', function() {
            return GithubConnector.getReposNames()
                .then(function(data) {
                    expect(data).to.include('Ideas');
                    expect(data).to.include('ChaosGame');
                    expect(data).to.include('Wolfensheep');
                    expect(data).to.include('the-brains.github.io');
                    expect(data).to.include('database-storage');
                    expect(data).to.include('GithubDB');
                    expect(data).to.include('TestSuite');
                    return Promise.resolve();
                });
        });

        testWrapper.execTest(mainName, 'should return repo', function() {
            return GithubConnector.getDatabaseRepo()
                .then(function(repo) {
                    expect(repo).to.exist;
                    return Promise.resolve();
                });
        });

        testWrapper.execTest(mainName, 'should return master', function() {
            return GithubConnector.getMasterBranch()
                .then(function(master) {
                    expect(master).to.exist;
                    return Promise.resolve();
                });
        });

        testWrapper.execTest(mainName, 'should get data folder', function() {
            return GithubConnector.getDataFolder()
                .then(function(dir) {
                    expect(dir).to.exist;
                    return Promise.resolve();
                });
        });
    }
);
