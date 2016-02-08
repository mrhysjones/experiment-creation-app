// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // Home Page (Experiments Listing)
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'ExperimentsController'
        })

        // Experiment Detail Page
        .when('/experiment/:id', {
            templateUrl: 'views/experiment.html',
            controller: 'ExperimentsDetailController'
        })

        // Create Experiment Page
        .when('/create/', {
            templateUrl: 'views/create.html',
            controller: 'CreateExperimentController'
        })

        // Results Detail Page
        .when('/results/:id', {
            templateUrl: 'views/results.html', 
            controller: 'ResultsController'
        })

        $locationProvider.html5Mode(true);

    }]);