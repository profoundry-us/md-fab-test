/**
 * Created by topher on 4/15/15.
 */

(function() {
  function FabController($scope) {
    var vm = this,
      scope = $scope;

    scope.focused = false;

    vm.focus = function($event) {
      console.log(" *** fab focus fired...");
      scope.focused = true;
    };

    vm.blur = function($event) {
      console.log(" *** fab blur fired...");
      scope.focused = false;
    };
  }

  angular.module("mdFabTest").controller("FabController", FabController);
})();
