angular.module('EditExperimentCtrl', ['ExperimentService']).controller('EditExperimentController', function($scope, $routeParams, $location, ExperimentService) {

	// Load form variables with a GET request with the ID route parameter
	$scope.experiment = ExperimentService.get({id: $routeParams.id}, function(){
			$scope.experimentName = $scope.experiment.name;
			$scope.experimentDesc = $scope.experiment.description;
			$scope.experimentCreator = $scope.experiment.createdBy;
			$scope.experimentItems = $scope.experiment.items;
	});

	// Function to update the experiment information using the ExperimentService
	$scope.submit = function(){
		ExperimentService.update({id: $routeParams.id}, {
			name: $scope.experimentName, description: $scope.experimentDesc,
			createdBy: $scope.experimentCreator, items: $scope.experimentItems
		}, function() {
				$location.path("/"); // Redirect to the home view
			});
	}

	/*
	 addExperimentItem and removeExperiment functions based on:
	http://www.shanidkv.com/blog/angularjs-adding-form-fields-dynamically
	*/

	// Function to increase the number of experiment items
	$scope.addExperimentItem = function(){
		var newItem = $scope.experimentItems.length + 1;
		$scope.experimentItems.push({'dataType': 'youtube'});
	}

	// Function to remove the last experiment item
	$scope.removeExperimentItem = function(index){
		$scope.experimentItems.splice(index, 1);
	}
})
