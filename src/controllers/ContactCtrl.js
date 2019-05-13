(function(){
    'use strict';

    angular
        .module('portfolioApp')
        .controller('ContactCtrl', ContactCtrl)

    ContactCtrl.$inject = ['$scope', 'ConstantsService', '$http'];

    /** @ngInject */
    function ContactCtrl($scope, ConstantsService,$http) {
        var self = this;
        var contactArray = [];
        self.processing = false;
        self.submitted = false;
        self.contactData = {};
        self.finished = false;
        self.error = {
            msg: null,
            occured: false
        };
        
        init();

        self.submitForm = function(contactData) {
            self.processing = true;
            for (var key in contactData) {
                if (contactData.hasOwnProperty(key)) {
                    contactArray.push({
                        name: key,
                        value: contactData[key]
                    })
                }
            }
            $.ajax({
                url: ConstantsService.ssUrl,
                method: "GET",
                dataType: "json",
                data: contactArray
            }).done(function(data) {
                if (data) {
                    self.processing = false;  
                    self.finished = true;
                }
            }).fail(function(error) {
                if (error) {
                    self.processing = false;
                    self.error.occured = true;
                    self.error.msg = "Error: " + (error.message ? error.message : " some unknown error occured");
                }
            }).always(function() {
                self.contactForm = {};
                $scope.$apply();
            })
        }

        function init(){
            console.log(ConstantsService.ssUrl);
        }
    }
}());