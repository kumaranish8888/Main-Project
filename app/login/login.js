(function(){
    
    angular.module("login", []);
    
    angular.module("login").controller("loginCtrl", ["$state", "$scope", loginCtrl]);
    
    function loginCtrl($state, $scope){
        var lm = this;
        lm.goToState = function(){
            $state.go("register");
        }
    }
    
})();