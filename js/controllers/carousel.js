daisyApp.controller('CarouselCtrl', function ($scope, Func, requester) {
    $scope.interval = 5000;
    if (!$scope.slides) {
        requester.getCarousel(
            null,
            function (data) {
                $scope.slides = data.results;
            },
            function (error) {
                Func.alert('danger', 'DEBUG! Carousel failed. See console.');
            }
        );
    }
});