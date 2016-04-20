angular.module('ExperimentsDetailCtrl', ['ExperimentService'])
.controller('ExperimentsDetailController', function($scope, $sce, $routeParams, ExperimentService) {
	// Use ExperimentService GET to retrieve experiment with routeParams.ID
	$scope.experiment = ExperimentService.get({id: $routeParams.id});
	$scope.currenthost = location.host;

// Function used to construct URL for item href - requires item type and data
$scope.constructHrefUrl = function(type, data){
	var hrefUrl = "";

	switch(type){
		// Assume in the format 'https://twitter.com/*Username/status/*ID'
		case 'twitter':
		hrefUrl = data;
		break;

		// Assume just the video ID passed in - construct YouTube watch URL
		case 'youtube':
		hrefUrl = 'https://www.youtube.com/watch?v=' + data;
		break;

				// Check if absolute URL - append 'http://' if required
		case 'webpage':
			if (data.substring(0, 4) != 'http'){
				data = 'http://' + data;
			}
			hrefUrl = data;
			break;
	}
	return hrefUrl;
}

/*
Function used to generate previews of different types of media
Requires the datatype - twitter/youtube/webpage, and the data source
*/
$scope.constructEmbedUrl = function(type, data){
	var embedUrl = "";

	switch(type){
		// Assume in the format 'https://twitter.com/*Username/status/*ID'
		case 'twitter':
		embedUrl = 'http://twitframe.com/show?' + data;
		break;

		// Assume just the video ID passed in - construct YouTube embed URL
		case 'youtube':
		embedUrl = 'http://www.youtube.com/embed/' + data;
		break;

		// Check if absolute URL - append 'http://' if required
		case 'webpage':
		if (data.substring(0, 4) != 'http'){
			data = 'http://' + data;
		}
		embedUrl = data;
		break;
	}
	// Needs to be a trusted resource URL in order to display preview
	return $sce.trustAsResourceUrl(embedUrl);
}



});
