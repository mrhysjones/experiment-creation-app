    angular.module("ExperimentService", []).factory('ExperimentService', ['$resource', function($resource){
    	return $resource('/api/experiments/:id', null, {
    		'update': { method:'PUT' }, 
    	});
    }])