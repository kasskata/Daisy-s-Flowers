daisyApp.factory('Func', function Func($location) {

    function goTo(path){
        $location.path('/'+path+'');
    }

    return{
        goTo: goTo
    }
});