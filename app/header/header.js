(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
    function headerCtrl(){
        
        var hm = this;
        
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
    }
    
})();