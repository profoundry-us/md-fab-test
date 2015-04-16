/**
 * Created by topher on 4/14/15.
 */

(function(){
  angular.module("mdFabTest").directive("mdFab", FabDirective);

  function FabDirective() {
    return {
      restrict: "E",
      templateUrl: "md-fab/md-fab.template.html",
      transclude: true,

      controller: "FabController",

      scope: true
    }
  }

  FabDirective.$inject = [];
})();