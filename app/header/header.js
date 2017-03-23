(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["$state", "$rootScope", headerCtrl]);
    
    function headerCtrl($state, $rootScope){
        var hm = this;
        hm.mybrandName = "BitBlogger";
        
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
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(item){
            hm.cartItems++;
        })
        
    }
    
    
    
})();