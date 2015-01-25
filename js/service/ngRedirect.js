daisyApp.directive('ngRedirect', function ($location) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, element, attrs, controller) {
            element.on('click', function (event) {
                $location.path('/'+scope.path);
            });
        }}
});
