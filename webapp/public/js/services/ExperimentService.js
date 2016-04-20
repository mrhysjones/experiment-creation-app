// Service used to perform GET/PUT/POST/DELETE results on experiments API
angular.module("ExperimentService", []).factory('ExperimentService', ['$resource', function($resource){
  return $resource('/api/experiments/:id', null, {
    'update': { method:'PUT' },
  });
}])
