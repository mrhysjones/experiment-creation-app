angular.module('ExperimentsCtrl', ['ExperimentService']).controller('ExperimentsController', function($scope, ExperimentService) {

	// Use ExperimentService to GET all experiment data from experiment API
	$scope.experiments = ExperimentService.query();

	// Function to delete experiment on table click through API call and refresh
	$scope.delete = function(experimentID){
		  ExperimentService.delete({ id: experimentID }, function() {
    $scope.experiments = ExperimentService.query();
  });
	};

	// Function to calculate total experiment length based on 'displaySeconds'
	$scope.experimentLength = function(items){
		var sum = 0;
		for(var i = 0; i < items.length; i++){
    sum += items[i].displaySeconds;
  }
    return sum;
	}

});
