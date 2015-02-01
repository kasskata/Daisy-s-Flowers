daisyApp.config(function ($locationProvider, $routeProvider) {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'partials/home.html'
        })
        .when('/posters',
        {
            templateUrl: 'partials/posters.html'
        })
        .when('/contacts',
        {
            templateUrl: 'partials/contacts.html'
        })
        .when('/aboutUs',
        {
            templateUrl: 'partials/aboutUs.html'
        })
        .otherwise(
        {
            redirectTo:'/home'
        }
    );
});
