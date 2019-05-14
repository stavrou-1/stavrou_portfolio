(function(){
    'use strict';

    angular
        .module('portfolioApp', ['ui.router', 'ngResource'])
        .constant('CONSTANT', {
            attr:"this is first contant",
            ssUrl: "https://script.google.com/macros/s/AKfycbxyfoeTQucyIsEvcrd8o0MGX9G3m_g2dnNApy92_WyEtPIkUo8/exec"
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "./views/partial-home.html",
                    controller: "MainCtrl"
                })
                .state("work", {
                    url: "/work",
                    templateUrl: "./views/partial-work.html"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "./views/partial-about.html"
                })
                .state("contact", {
                    url: "/contact",
                    templateUrl: "./views/partial-contact.html",
                    controller: "ContactCtrl as ctrl",
                })
        })
}());