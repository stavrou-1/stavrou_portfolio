(function(){
    'use strict';

    angular
        .module('portfolioApp')
        .service('ConstantsService', ConstantsService)

    ConstantsService.$inject = ['$http', 'CONSTANT'];

    function ConstantsService($http, CONSTANT) {
        // this.getData = getData;
        this.ssUrl = CONSTANT.ssUrl

        
        function getData() {
            console.log(this.fullName);
        }

    }
})();