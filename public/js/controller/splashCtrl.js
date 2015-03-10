'use strict()';

/**
 * Splash Controller
 * @namespace Controller
 * @return {[type]} [description]
 */
(function() {
  angular
    .module('ngHere')
    .controller('SplashCtrl', SplashCtrl);

  SplashCtrl.$inject = ['StoryAPI'];
  /**
   * Splash Controller
   * @memberOf Controller
   * @namespace Home
   */
  function SplashCtrl(StoryAPI) {
    var vm  = this;
    vm.loginView = false;
    vm.yourId = window.current_user_id;

    // vm.login = function(args) {
    //   return StoryAPI.login(args)
    //     .success(function(data) {
    //       console.log(data);
    //     })
    //     .error(function(err) {
    //       console.log(err);
    //     });
    // };
  }
})();