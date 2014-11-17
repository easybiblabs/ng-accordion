/*
 * ng-accordion
 * Accordion directive for AngularJS
 * Licensed under the MIT license
 */

angular.module('ng-accordion', []).directive(
  'ngAccordion',
  function() {
    'use strict';

    return {
      restrict: 'EA',
      scope: {
        togglerSelector: '@',
        sectionSelector: '@',
        activeClass: '@',
        oneAtATime: '@',
        initOpenSection: '@',
      },
      link: function(scope, element) {
        // Default values
        scope.togglerSelector = scope.togglerSelector.length ? scope.togglerSelector : '.ng-accordion-togler';
        scope.sectionSelector = scope.sectionSelector.length ? scope.sectionSelector : '.ng-accordion-section';
        scope.activeClass = scope.activeClass.length ? scope.activeClass : 'ng-accordion-active';

        var toggler = element.find(scope.togglerSelector);
        var section = element.find(scope.sectionSelector);

        element.find(initOpenSection).addClass(scope.activeClass);

        toggler.on('click', function() {
          var activeSection = jQuery(element.get(0).getElementsByClassName(scope.activeClass));
          var thisSection = jQuery(this).closest(section);

          if(scope.oneAtATime === 'false') {
            thisSection.toggleClass(scope.activeClass);
          } else {
            activeSection.removeClass(scope.activeClass);
            thisSection.addClass(scope.activeClass);
          }
        });
      }
    };
  });
