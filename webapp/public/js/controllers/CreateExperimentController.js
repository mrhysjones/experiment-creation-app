angular.module('CreateExperimentCtrl', ['ExperimentService']).controller('CreateExperimentController', function($scope, $location, ExperimentService) {

	$scope.experimentName = "";
	$scope.experimentDesc = "";
	$scope.experimentCreator = "";
	$scope.experimentItems = [];


	$scope.submit = function(){
		console.log("executing");
		ExperimentService.save({name: $scope.experimentName, description: $scope.experimentDesc, createdBy: $scope.experimentCreator, 
			items: $scope.experimentItems}, function() {
				$location.path("/");
			});
	}
})