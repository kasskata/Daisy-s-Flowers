daisyApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/bouquet',
        {
            templateUrl: 'partials/bouquet.html'
        })
        .when('/home',
        {
            templateUrl: 'partials/home.html'
        })
        .otherwise(
        {
            redirectTo: '/home'
        });
});