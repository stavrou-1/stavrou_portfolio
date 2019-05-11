(function(){
    'use strict';

    angular
        .module('portfolioApp')
        .controller('MainCtrl', MainCtrl)

    MainCtrl.$inject = ['$scope'];

    /** @ngInject */
    function MainCtrl($scope) {
        var self = this;

        activate();

        console.log(self.apple);

        function activate() { 
            self.apple = {
                one: "one",
                two: "two"
            }
        }
    }
})();