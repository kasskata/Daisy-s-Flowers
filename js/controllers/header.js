daisyApp.controller("HeaderController", function ($scope, Func) {
    $scope.redirect = function(path){
        Func.redirect(path);
    }
});