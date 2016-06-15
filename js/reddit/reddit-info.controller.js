module.exports = function(app) {
    app.directive('redditInfo', function(redditList, commonService, $http) {
        return {
            template: require('./reddit-info.html'),
            controller: function($scope) {
                var vm = this;

                vm.getRedditData = function() {
                    commonService.getRedditData().then(function(resp){
                        $scope.hotreddit = resp;
                    })
                }

                vm.getRedditData();
            }
        }
    })
}