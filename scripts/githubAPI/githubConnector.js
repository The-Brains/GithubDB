define(['jquery', 'lodash'], function($) {
    var Github = function() {
        var rootURL = 'https://api.github.com';
        var organizationName = 'The-Brains';

        this.getRepos = function() {
            return $.getJSON(`${rootURL}/orgs/The-Brains/repos`);
        };

        this.getReposNames = function() {
            return this.getRepos().then(function(data) {
                return _.map(data, function(repo) {
                    return _.replace(repo.full_name, `${organizationName}/`, '');
                });
            })
        }
    };

    return Github;
});
