(function () {
    'use strict';

    angular
        .module ('portfolioApp')
        .directive ('navDirective', directive);


    /** @ngInject */
    function directive() {

        function directiveController(){
            var self = this;
            
            init();

            console.log(self.directiveTest);

            function init(){
                self.directiveTest = "test works!"
            }
        }

        function link(){
            self.directiveLink = "link works!"
            console.log(self.directiveLink)
        }

        return {
            bindToController: true,
            controller: directiveController,
            templateUrl: "../views/components/nav.html",
            controllerAs: 'Ctrl',
            link: link,
            restrict: 'AE',
            scope: {},
        }
    }

} ());