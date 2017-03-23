(function(){
    
    angular.module("myproject", ["header","register", "ui.router", "products", "login", "common"]);
    
    angular.module("myproject").controller("mainCtrl", [mainCtrl]);
    
    angular.module("myproject").config(["$stateProvider", function($stateProvider){
        
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
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("login", loginObj);
        
    }]);
    
    function mainCtrl(){
        
        var mn = this;
        
        mn.headerTemplate = "app/header/header.tpl.html";
        
    }
    
})();