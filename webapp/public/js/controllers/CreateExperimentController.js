angular.module('CreateExperimentCtrl', ['ExperimentService']).controller('CreateExperimentController', function($scope, $location, ExperimentService) {

	$scope.experimentName = "";
	$scope.experimentDesc = "";
	$scope.experimentCreator = "";
	$scope.experimentItems = [{dataType: 'youtube'}];
	$scope.experimentHelp = "Enter a YouTube Video ID such as tntOCGkgt98"; 


	$scope.submit = function(){
		ExperimentService.save({name: $scope.experimentName, description: $scope.experimentDesc, createdBy: $scope.experimentCreator, 
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
		$scope.experimentItems.splice(index,1);
	}

	$scope.datasourceTooltip = function(datasource){
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