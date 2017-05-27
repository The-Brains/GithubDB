define(function() {
    var findGetParameter = function(parameterName, url = null) {
        var result = null;
        var tmp = [];

        var url = url ? url : location.search;

        url
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) {
                    result = tmp[1] ? decodeURIComponent(tmp[1]) : true;
                }
            });
        return result;
    };

    return findGetParameter;
});
