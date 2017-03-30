(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc", "$rootScope", "$scope", "$state", headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerCtrl(headerSvc, $rootScope, $scope, $state){
        var hc = this;
        hc.navItem = headerSvc.navItems();
        hc.cartItems = 0;
        hc.mybrandName = "BitBlogger";
        
        $rootScope.$on("ADD-ITEM-TO-CART",function(){
            hc.cartItems++;
        })
        
        hc.goToState = function(){
            $state.go("home");
        }
        
    }
    
    function headerSvc(){
        var hs = this;
        hs.navItems = function(){
            return [
            {"key":"posts", "value":"Posts"},
            {"key":"login", "value":"Login"},
            {"key":"register", "value":"Register"},
            {"key":"products", "value":"Products"},
        ];
        }
        
        
    }
    
})();