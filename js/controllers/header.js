daisyApp.controller("HeaderController", function ($scope, $rootScope, $location, Func, requester) {

    $scope.redirect = function (path) {
        Func.redirect(path);
    }

    $scope.where = function (type) {
        $rootScope.isLoad = false;

        requester.getPosters(
            {where: {"category": type}},
            function (data) {
                $rootScope.posters = data;
                Func.alert('success', 'DEBUG Get Posters Success.');
                $location.path('/posters');
                $rootScope.isLoad = true;
            },
            function (error) {
                Func.alert('danger', 'DEBUG Get Posters failed.');
            }
        );
    }
});