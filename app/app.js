(function(){
    
    angular.module("project", ["header", "ui.router", "register", "products", "common", "home", "login"]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc",
            url:'/register'
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller:"productsCtrl as pc",
            url:'/products'
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hc",
            url: '/home'
        };
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as ll",
            url:'/login'
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("home", homeObj);
        $stateProvider.state("login", loginObj);
        
         $urlRouterProvider.otherwise('/home');
        
    }]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        
        
    }
    
})();