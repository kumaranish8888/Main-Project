(function(){
    
    angular.module("header").controller("headerCtrl", ["$rootScope",headerCtrl]);

 function headerCtrl($rootScope){
        var hc = this;
        hc.cartItems = 0;
        hc.name = "BitBlogger";
        hc.navItems = [
            {
                "key":"upload",
                "value":"Upload"
            },
            {
                "key":"login",
                "value":"Login"
            },
            {
                "key":"register",
                "value":"Register"
            },
            {
                "key":"products",
                "value":"Products"
            }
        ];
        
        $rootScope.$on("ADD-ITEM-TO-CART",function(){
            hc.cartItems++;
        });
        
    }
    
})();