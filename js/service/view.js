daisyApp.config(function ($locationProvider, $routeProvider) {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'partials/home.html'
        })
        .when('/arranging',
        {
            templateUrl: 'partials/arranging.html'
        })
        .when('/bouquets',
        {
            templateUrl: 'partials/bouquets.html'
        })
        .when('/buckets',
        {
            templateUrl: 'partials/buckets.html'
        })
        .when('/delivery',
        {
            templateUrl: 'partials/delivery.html'
        })
        .when('/pots',
        {
            templateUrl: 'partials/pots.html'
        })
        .when('/services',
        {
            templateUrl: 'partials/services.html'
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
