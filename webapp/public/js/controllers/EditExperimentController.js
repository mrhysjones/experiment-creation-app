angular.module('EditExperimentCtrl', ['ExperimentService']).controller('EditExperimentController', function($scope, $routeParams, $location, ExperimentService) {


	$scope.experiment = ExperimentService.get({id: $routeParams.id}, function(){
			$scope.experimentName = $scope.experiment.name;
			$scope.experimentDesc = $scope.experiment.description;
			$scope.experimentCreator = $scope.experiment.createdBy;
			$scope.experimentItems = $scope.experiment.items;
	});
	
	$scope.submit = function(){
		ExperimentService.update({id: $routeParams.id}, {name: $scope.experimentName, description: $scope.experimentDesc, createdBy: $scope.experimentCreator, 
			items: $scope.experimentItems}, function() {
				$location.path("/");
			});
	}
  
 	// Based on http://www.shanidkv.com/blog/angularjs-adding-form-fields-dynamically
  
	$scope.addExperimentItem = function(){
		var newItem = $scope.experimentItems.length + 1; 
		$scope.experimentItems.push({'dataType': 'youtube'});
	}

	$scope.removeExperimentItem = function(index){
		$scope.experimentItems.splice(index, 1);
	}
})