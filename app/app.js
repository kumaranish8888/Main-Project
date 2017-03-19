(function(){
    
    angular.module("project", ["header", "posts", "ui.router", "register", "login", "products"]);
    
    angular.module("project").config(["$stateProvider",function($stateProvider){
        
        console.log("Config: Project");
        
        var postsObj = {
            templateUrl: "app/posts/posts.tpl.html"
        };
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html"
        };
        
        var loginObj =  {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as lc"
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller: "productsCtrl as pl"
        };
        
        $stateProvider.state("posts", postsObj);
        $stateProvider.state("register", registerObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("products", productsObj);
    }]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
    }
    
})();