(function(){
    
    angular.module("common", []);
    angular.module("common").directive("customBrand", [customBrand]);
    angular.module("common").directive("customNavBar", [customNavBar]);
    angular.module("common").directive("numbersOnly", [numbersOnly]);
    angular.module("common").directive("customDatePicker", [customDatePicker]);
    
    function customBrand(){
        return {
          template: '<a class="navbar-brand" href="#">{{hc.brandName}}</a>'  
        };
    }
    
    function customNavBar() {
        
         return {
          templateUrl: 'app/header/header.tpl.html',
             restrict: "C"
        };
    }
    
    function customDatePicker(){
        
        return {
          restrict: "A",
            link: function(scope,element,attrs){
                element.datepicker();
            }
        };
    }
    
    function numbersOnly(){     
        return {
          restrict:"A",
            link: function(scope, element, attrs){
                element.bind("keypress", function(e){
                    console.log(e);
                        var restricted = e.key;
                        var reg = new  RegExp(/^[0-9]+$/); 
                        var maxlength = attrs[maxlength];
                    if(!reg.test(restricted) || this.value.length>maxlength){
                        e.preventDefault();
                    }
                })
            }
        };
    }
    
})();