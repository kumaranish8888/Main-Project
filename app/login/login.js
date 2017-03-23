(function(){
    
    angular.module("login", []);
    
    angular.module("login").controller("loginCtrl", [loginCtrl]);
    
    angular.module("login").service("loginSvc", [loginSvc]);
    
    function loginCtrl(){
        
        console.log("Login: Controller");
        
    }
    
    function loginSvc(){
        
        
        
    }
    
})();