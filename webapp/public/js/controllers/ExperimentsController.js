angular.module('ExperimentsCtrl', ['ExperimentService']).controller('ExperimentsController', function($scope, ExperimentService) {
	$scope.experiments = ExperimentService.query();
	console.log($scope.experiments);

	// Function to delete experiment on table click through API call and refresh
	$scope.delete = function(experimentID){
		  ExperimentService.delete({ id: experimentID }, function() {
    $scope.experiments = ExperimentService.query();
  });
	};

	// Function to calculate the experiment length based on 'displaySeconds' for each item
	$scope.experimentLength = function(items){
		var sum = 0; 
		for(var i = 0; i < items.length; i++){
    sum += items[i].displaySeconds;
  }
    return sum; 
	}

});