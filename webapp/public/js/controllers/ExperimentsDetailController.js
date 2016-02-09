angular.module('ExperimentsDetailCtrl', ['ExperimentService'])
.controller('ExperimentsDetailController', function($scope, $routeParams, ExperimentService) {
$scope.experiment = ExperimentService.get({id: $routeParams.id});
});