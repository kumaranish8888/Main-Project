(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["$state", "$rootScope", "$scope", headerCtrl]);
    
    function headerCtrl($state, $rootScope, $scope){
        var hm = this;
        $scope.mybrandName = "BitBlogger";
        
        hm.cartItems =  0;
        
        hm.navItems = [
            {
                "key": "posts",
                "value": "Posts"
            },
            {
                "key": "login",
                "value": "Login"
            },
            {
                "key": "register",
                "value": "Register"
            },
            {
                "key": "products",
                "value": "Products"
            },
        ];
        
        hm.goToState = function(data){
            $state.go(data);
        }
        
        hm.goState = function(){
            $state.go("home");
        }
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(item){
            hm.cartItems++;
        })
        
    }
    
    
    
})();