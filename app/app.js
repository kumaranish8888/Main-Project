(function(){
    
    angular.module("project", ["header", "ui.router", "register", "products", "common", "success", "upload"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider", function($stateProvider){
        
        var registerObj = {
            templateUrl:"app/register/register.tpl.html",
            controller:"registerCtrl as rc"
        };
        
        var productsObj = {
            templateUrl:"app/products/products.tpl.html",
            controller:"productsCtrl as pc"
        };
        
        var succObj = {
            templateUrl: "app/success/success.tpl.html"  
        };
        
        var uploadObj = {
            templateUrl: "app/upload/upload.tpl.html",
            controller: "uploadCtrl as uc"
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("success", succObj);
        $stateProvider.state("upload", uploadObj);
        
        
    }]);
    
    function mainCtrl(){
        
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        
    }
    
})();