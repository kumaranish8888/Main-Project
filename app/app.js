(function(){
    
    angular.module("myproject", ["header","register", "ui.router", "products", "login", "common", "home"]);
    
    angular.module("myproject").controller("mainCtrl", [mainCtrl]);
    
    angular.module("myproject").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var productsObj =  {
            templateUrl: "app/products/products.tpl.html",
            controller: "productsCtrl as pc"
        };
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html"
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hc",
            url : '/home'
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("home", homeObj);
        
        $urlRouterProvider.otherwise('/home');
        
    }]);
    
    function mainCtrl(){
        
        var mn = this;
        
        mn.headerTemplate = "app/header/header.tpl.html";
        
    }
    
})();