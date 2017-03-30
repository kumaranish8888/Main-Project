(function(){
    
    angular.module("project", ["header", "ui.router", "register", "products", "common", "home"]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller:"productsCtrl as pc"
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hc",
            url: '/'
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("home", homeObj);
        
         $urlRouterProvider.otherwise('/');
        
    }]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        
        
    }
    
})();