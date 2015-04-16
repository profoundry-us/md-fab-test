/**
 * Created by topher on 4/14/15.
 */

(function() {
  function FabSpeedDialDirective() {
    return {
      restrict: "E",

      scope: true,

      require: ["^mdFab", "mdFabSpeedDial"],

      controller: function($scope) {
        var vm = this;

        $scope.focus = function($event) {
          console.log(" *** fab speed dial focused: ", $event);
          vm.fabCtrl.focus($event);
        };

        $scope.blur = function($event) {
          console.log(" *** fab speed dial blurred: ", $event);
          vm.fabCtrl.blur($event);
        };
      },

      compile: function($element, $attrs) {
        $element.attr("layout", "column");
        $element.attr("layout-align", "center center");

        var children = $element.children(),
          i, child;

        for (i = 0; i < children.length; i++) {
          if (children[i].tagName) {
            child = angular.element(children[i]);

            if (!child.attr("ng-focus")) {
              child.attr("ng-focus", "focus($event)");
            }

            if (!child.attr("ng-blur")) {
              child.attr("ng-blur", "blur($event)");
            }
          }
        }

        return {
          post: function($scope, $element, $attributes, controllers) {
            var fabCtrl = controllers[0];
            var speedDialCtrl = controllers[1];

            speedDialCtrl.fabCtrl = fabCtrl;
          }
        };
      }
    }
  }

  angular.module("mdFabTest").directive("mdFabSpeedDial", FabSpeedDialDirective);
})();
