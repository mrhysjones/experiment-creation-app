angular.module('CreateExperimentCtrl', ['ExperimentService']).controller('CreateExperimentController', function($scope, ExperimentService) {

	$scope.experimentName = "Fuck this";
	$scope.experimentDesc = "";
	$scope.experimentCreator = "";
	$scope.experimentItems = [];

	$scope.save = function(){
		$scope.experiments = ExperimentService.query();

		if(!$scope.experimentName || !$scope.experimentDesc || !$scope.experimentCreator || !$scope.experimentItems) return;
		var newExperiment = new Experiments({ name: $scope.experimentName, createdBy: $scope.experimentCreator, 
			description: $scope.experimentDesc, items: $scope.experimentItems});

		newExperiment.save(function(){
			$scope.experiments.push(newExperiment);

			// Clear input
			$scope.experimentName = "";
			$scope.experimentDesc = "";
			$scope.experimentCreator = "";
			$scope.experimentItems = [];
		});
	}
}])

});