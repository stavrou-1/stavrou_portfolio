(function(){
    'use strict';

    angular
        .module('portfolioApp')
        .controller('ContactCtrl', ContactCtrl)

    ContactCtrl.$inject = ['$scope', 'ConstantsService', '$http', '$httpParamSerializer'];

    /** @ngInject */
    function ContactCtrl($scope, ConstantsService,$http, $httpParamSerializer) {
        var self = this;
        
        self.contactData = {};
        
        init();

        $scope.submitForm = function(contactData) {
            var arr = [];
            arr.push(contactData);
            // var data = $httpParamSerializer(contactData);
            // "email=ff&firstname=wefewf&inquiry=fe&lastname=ewfefef&phone=f"
            // debugger;
            // return;
            console.log(contactData);
            $http({
                url: ConstantsService.ssUrl,
                method: "GET",
                dataType: "JSON",
                headers: {
                    Accept: "application/json, text/plain, */*"
                },
                data: contactData
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
        }

        function init(){
            console.log(ConstantsService.ssUrl);
            // console.log(contactData);

        }

    }

}());