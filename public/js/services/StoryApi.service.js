'use strict()';

/**
 * Story API
 * @namespace Factory
 */
(function() {
  angular
    .module('ngHere')
    .factory('StoryAPI', StoryAPI);

  StoryAPI.$inject = ['$http'];

  /**
   * The main service for getting getting and sending API requests.
   * Each different API call should have a method here.
   * @return {json}       API response
   * @namespace StoryAPI
   * @memberOf Factory
   */
  function StoryAPI($http) {
    return {
      "login": function(params) {
        return $http({
          method: 'PUT',
          dataType: 'json',
          url: '/api/users/{id}',
          params: params
        });
      }
    };
  }
})();