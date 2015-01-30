daisyApp.controller('CarouselCtrl', function ($scope, requester) {
    $scope.interval = 5000;
    $scope.slides = [];

    requester.getPosters(
        null,
        function (data) {
            $scope.slides = data.results;
            console.log($scope.slides[0]);
        },
        function (error) {
            Func.alert('danger', 'DEBUG! Carousel failed. See console.');
        }
    );

//    var slides = $scope.slides = [];
//    $scope.addSlide = function() {
//        var newWidth = 600 + slides.length + 1;
//        slides.push({
//            image: 'http://placekitten.com/' + newWidth + '/300',
//            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//        });
//    };
//
//    for (var i=0; i<20; i++) {
//        $scope.addSlide();
//    }
});