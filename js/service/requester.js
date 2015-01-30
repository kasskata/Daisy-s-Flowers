daisyApp.factory('requester', function requester($http) {
    var App = 'BL374W3Dxr75jIALHXSI9cMnQfWYCUDqOt6KGKNT';
    var APIkey = 'AhZjMYj58CRDr71m5P8zlWRex2ijnwNKssTq0YI8';
    var content = 'application/json';
    var rootURL = 'https://api.parse.com/1/';
    var ACL = {};

    ACL['*'] = {
        "read": true
    };
    function request(method, path, data, success, error, params) {
        $http({
                method: method,
                headers: {
                    "X-Parse-Application-Id": App,
                    "X-Parse-REST-API-Key": APIkey,
                    "X-Parse-Session-Token": JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user"))["sessionToken"] : null
                },
                content: content,
                data: JSON.stringify(data),
                params: params,
                url: rootURL + path
            }
        )
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            }
        );
    }

    function addPoster(data, success, error) {
        data['ACL'] = ACL;

        request("POST", "classes/Poster", data, success, error);
    }

    function getPosters(query, success, error) {
        request("GET", "classes/Poster", query, success, error);
    }

    function getCategories(success, error) {
        request("GET", "classes/Category",null, success, error);
    }

    function login(data, success, error) {
        request("GET", "login", null, success, error, data);
    }

    return{
        getCategories: getCategories,

        login: login,

        addPoster: addPoster,
        getPosters: getPosters
    }
});