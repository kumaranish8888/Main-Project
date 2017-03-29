(function(){
    
    angular.module("project", ["header", "ui.router", "register", "products"]);
    
    angular.module("project").config(["$stateProvider",function($stateProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller:"productsCtrl as pc"
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        
    }]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        
        
    }
    
})();