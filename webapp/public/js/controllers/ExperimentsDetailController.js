angular.module('ExperimentsDetailCtrl', ['ExperimentService'])
.controller('ExperimentsDetailController', function($scope, $sce, $routeParams, ExperimentService) {
	$scope.experiment = ExperimentService.get({id: $routeParams.id});
	$scope.currenthost = location.host;

// Function used to construct URL for item href - requires item type and data
$scope.constructHrefUrl = function(type, data){
	var hrefUrl = ""; 

	switch(type){
		// Assume in the format 'https://twitter.com/*Username/status/*ID'
		case 'Twitter':
		hrefUrl = data;
		break; 

		// Assume just the video ID passed in - construct YouTube watch URL		
		case 'YouTube':
		hrefUrl = 'https://www.youtube.com/watch?v=' + data; 
		break;

				// Check if absolute URL - append 'http://' if required
		case 'Webpage':
			if (data.substring(0, 4) != 'http'){
				data = 'http://' + data; 
			}
			hrefUrl = data; 
			break;
	}
	return hrefUrl;
}

// Function used to generate previews of different types of media - requires item type and data
$scope.constructEmbedUrl = function(type, data){
	var embedUrl = ""; 

	switch(type){
		// Assume in the format 'https://twitter.com/*Username/status/*ID' - use twitframe.com to display within iframe
		case 'Twitter':
		embedUrl = 'http://twitframe.com/show?' + data; 
		break;

		// Assume just the video ID passed in - construct YouTube embed URL
		case 'YouTube': 
		embedUrl = 'http://www.youtube.com/embed/' + data; 
		break;

		// Check if absolute URL - append 'http://' if required
		case 'Webpage':
		if (data.substring(0, 4) != 'http'){
			data = 'http://' + data; 
		}
		embedUrl = data; 
		break;
	}

	return $sce.trustAsResourceUrl(embedUrl);
}



});