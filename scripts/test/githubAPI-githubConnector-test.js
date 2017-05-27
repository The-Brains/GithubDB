define(
    ['chai', './test-wrapper.js', '../githubAPI/githubConnector.js'],
    function(chai, testWrapper, GithubConnector) {
        var expect = chai.expect;
        var mainName = 'githubAPI-githubConnector';

        testWrapper.execTest(mainName, 'should return correct GET values', function() {
            var github = new GithubConnector();
            return github.getReposNames()
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
    }
);
