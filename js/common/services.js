module.exports = function(app) {
    app.service('commonService', function($http, $q) {
        var url = "https://www.reddit.com/hot.json";
        var deferred = $q.defer();
        this.getRedditData = function() {
            $http({
                url: url,
                dataType: "jsonp",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).success(function(response){
                deferred.resolve(response.data.children);
                console.log(response);
            }).error(function(error){
                //return error;
            });
            return deferred.promise;
        }
    })
}