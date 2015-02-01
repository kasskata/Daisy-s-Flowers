daisyApp.controller('AddPosterCtrl', function ($scope, requester, Func, $location) {
    $scope.dataAddReq = {};
    $scope.dataCarousel = {};
    $scope.isLoged = false;
    $scope.user = {};

    requester.getCategories(
        function (data) {
            $scope.categories = data.results;
        },
        function (error) {
            Func.alert('danger', 'DEBUG MSG! Can\'t load Categories');
        }
    );

    $scope.attachFile = function () {
        var preview = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            $scope.dataAddReq.image = reader.result;
            $('#imgDisplay').attr('src', reader.result);
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    $scope.attachCarousel = function () {
        var previewCarousel = document.querySelector('#carouselDisplay');
        var file = document.querySelector('#imgInpCarousel').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            $scope.dataCarousel.image = reader.result;
            $('#carouselDisplay').attr('src', reader.result);
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            previewCarousel.src = "";
        }
    }

    $scope.upCarousel = function () {
        $scope.dataCarousel.price = Number($scope.dataCarousel.price).toFixed(2);
        if (!$scope.dataCarousel.price) {
            throw new Error("Invalid price");
        }
        else {
            requester.addCarousel(
                $scope.dataCarousel,
                function (data) {
                    Func.alert('success', 'Posting Success. Can see it in HOME tab.');
                },
                function (error) {
                    Func.alert('danger', 'Posting failed. Please try again later.');
                }
            );
        }
    };

    $scope.ok = function () {
        $scope.dataAddReq.price = Number($scope.dataAddReq.price).toFixed(2);
        requester.addPoster(
            $scope.dataAddReq,
            function (data) {
                Func.alert('success', 'Posting Success. Can see it in ' + $scope.dataAddReq.category + '\'s tab.');
            },
            function (error) {
                Func.alert('danger', 'Posting failed. Please try again later.');
            }
        );
    };

    $scope.cancel = function () {
        $location.path('/home');
    };

    $scope.submit = function () {
        requester.login(
            $scope.user,
            function (data) {
                $scope.isLoged = true;
                sessionStorage.setItem('user', JSON.stringify(data));
            },
            function (error) {
                Func.alert('danger', 'Login failed. ');
            }
        );
    }
});