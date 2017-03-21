(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["$rootScope", headerCtrl]);
    
    function headerCtrl($rootScope){
        
        var hm = this;
        
        hm.brandName = "BitBlogger";
        
        hm.navItems = [
            {
                "key":"posts",
                "value": "Posts"
            },
            {
                "key":"products",
                "value": "Products"
            },
            {
                "key":"register",
                "value": "Register"
            },
            {
                "key":"login",
                "value": "Login"
            },
        ];
        
        hm.cartItems = 0;
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(data){
            
            hm.cartItems++;
        })
    }
    
})();