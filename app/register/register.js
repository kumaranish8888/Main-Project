(function(){
    
    angular.module("register", []);
    
    angular.module("register").controller("registerCtrl", ["$state", registerCtrl]);
    
    function registerCtrl($state){
        
        this.changeState = function(){
            $state.go("login");
        }
        
    }
    
    angular.module("register").service("registerSvc", [registerSvc]);
    
    function registerSvc(){
        
        
        
    }
    
})();