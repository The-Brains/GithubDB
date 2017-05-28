// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    enforceDefine: true,
    baseUrl: 'scripts/lib',
    paths: {
        chai: 'chai',
        jquery: 'https://code.jquery.com/jquery-3.2.1.min',
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min',
        seedRandom: 'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.3/seedrandom.min',
        gh3: 'gh3',
        octokat: 'octokat',
    },
});

define(function() {
    // Start loading the main app file. Put all of
    // your application logic in there.
    requirejs([
        'scripts/lib/material.min.js',
        'scripts/test/githubAPI-githubConnector-2-test.js',
        'scripts/test/util-find-get-param-test.js',
    ]);
});
