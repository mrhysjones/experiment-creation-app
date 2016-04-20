// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // List experiments
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'ExperimentsController'
        })

        // View experiment
        .when('/experiment/:id', {
            templateUrl: 'views/experiment.html',
            controller: 'ExperimentsDetailController'
        })

        // Create experiment
        .when('/create/', {
            templateUrl: 'views/create.html',
            controller: 'CreateExperimentController'
        })

        // Edit experiment
        .when('/edit/:id', {
            templateUrl: 'views/edit.html',
            controller: 'EditExperimentController'
        })

        $locationProvider.html5Mode(true);

    }]);
