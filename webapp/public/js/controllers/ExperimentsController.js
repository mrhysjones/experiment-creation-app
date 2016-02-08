angular.module('ExperimentsCtrl', ['ExperimentService']).controller('ExperimentsController', function($scope, ExperimentService) {
	$scope.experiments = ExperimentService.query();
	console.log($scope.experiments);
	$scope.delete = function(experimentID){
		  ExperimentService.delete({ id: experimentID }, function() {
    $scope.experiments = ExperimentService.query();
  });
	};
});