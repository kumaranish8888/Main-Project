(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("customBrand", [customBrand]);
    
    function customBrand(){
        return {
          template: '<a class="navbar-brand" href="#">{{hc.brandName}}</a>'  
        };
    }
    
    angular.module("common").directive("customNavBar", [customNavBar]);
    
    function customNavBar() {
        
         return {
          templateUrl: 'app/header/header.tpl.html',
             restrict: "C"
        };
        
    }
    
})();