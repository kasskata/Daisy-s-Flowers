daisyApp.controller('AddPosterCtrl', function ($scope, requester, Func, $location) {
    $scope.dataAddReq = {};
    $scope.isLoged = false;
    $scope.user = {};

    requester.getCategories(
        function (data) {
            $scope.categories = data.results;
            $scope.dataAddReq.category = $scope.categories[0].name;
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

    $scope.ok = function () {
//        console.log($scope.dataAddReq);
        $scope.dataAddReq.price = Number($scope.dataAddReq.price);
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
});