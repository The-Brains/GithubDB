define(
    ['chai', './test-wrapper.js', '../util/find-get-param.js'],
    function(chai, testWrapper, FindGetParam) {
        var expect = chai.expect;
        var mainName = 'util-find-get-param';

        testWrapper.execTest(mainName, 'should return correct GET values', function() {
            expect(FindGetParam('url', '?url=test')).to.be.equal('test');
        });

        testWrapper.execTest(mainName, 'should return null when not present', function() {
            expect(FindGetParam('something', '?url=test')).to.not.exists;
        });
    }
);
