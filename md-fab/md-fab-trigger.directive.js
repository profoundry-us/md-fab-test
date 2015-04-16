/**
 * Created by topher on 4/14/15.
 */

(function() {
  function FabTriggerDirective() {
    return {
      restrict: "E",

      scope: true,

      require: ["^mdFab", "mdFabTrigger"],

      controller: function($scope) {
        var vm = this;

        $scope.focus = function($event) {
          console.log(" *** fab trigger focused: ", $event);
          vm.fabCtrl.focus($event);
        };

        $scope.blur = function($event) {
          console.log(" *** fab trigger blurred: ", $event);
          vm.fabCtrl.blur($event);
        };
      },

      compile: function($element, $attrs) {
        var children = $element.children();

        if (children && children.length > 0) {
          var child = angular.element(children[0]);

          if (!child.attr("ng-focus")) {
            child.attr("ng-focus", "focus($event)");
          }

          if (!child.attr("ng-blur")) {
            child.attr("ng-blur", "blur($event)");
          }
        }

        return {
          post: function($scope, $element, $attributes, controllers) {
            var fabCtrl = controllers[0];
            var triggerCtrl = controllers[1];

            triggerCtrl.fabCtrl = fabCtrl;
          }
        };
      }
    }
  }

  angular.module("mdFabTest").directive("mdFabTrigger", FabTriggerDirective);
})();
