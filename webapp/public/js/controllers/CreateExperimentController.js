angular.module('CreateExperimentCtrl', ['ExperimentService']).controller('CreateExperimentController', function($scope, $location, ExperimentService) {

	// Form scope variables
	$scope.experimentName = "";
	$scope.experimentDesc = "";
	$scope.experimentCreator = "";
	$scope.experimentItems = [{dataType: 'youtube'}];
	$scope.experimentHelp = "Enter a YouTube Video ID such as tntOCGkgt98";

	// Function to submit form data to Experiment API using ExperimentService
	$scope.submit = function () {
		ExperimentService.save({name: $scope.experimentName,
			description: $scope.experimentDesc, createdBy: $scope.experimentCreator,
			items: $scope.experimentItems}, function() {
				$location.path("/"); // Redirect to the home view
			});
	}

 	/*
	 addExperimentItem and removeExperiment functions based on:
	http://www.shanidkv.com/blog/angularjs-adding-form-fields-dynamically
	*/

	// Function to increase the number of experiment items
	$scope.addExperimentItem = function () {
		var newItem = $scope.experimentItems.length + 1;
		$scope.experimentItems.push({'dataType': 'youtube'});
	}

	// Function to remove the last experiment item
	$scope.removeExperimentItem = function (index) {
		$scope.experimentItems.splice(index,1);
	}

	// Function to display help text dependent on experiment item source
	$scope.datasourceTooltip = function (datasource) {
		if (datasource === 'twitter'){
			$scope.experimentHelp = 'Enter a full tweet URL';
		}
		else if(datasource === 'webpage'){
			$scope.experimentHelp = 'Enter the webpage URL';
		}
		else{

		}
	}

})
