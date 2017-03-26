(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("brandName", [brandName]);
  //  angular.module("common").directive("navBar", [navBar]);
    angular.module("common").directive("numbersOnly", [numbersOnly]);
    angular.module("common").directive("checkUser", [checkUser]);
    angular.module("common").directive("details", [details]);
    
    
    function brandName(){
        return {
            template:'<a class="navbar-brand" href="#">{{hc.name}}</a>'  
        };
        
    }
    
 /*   function navBar(){
        return {
            templateUrl:"app/header/header.tpl.html",
            restrict:"A"
        };
    } */
    
    function numbersOnly(){
        return{
            restrict:"A",
            link: function(scope,element,attrs){
                element.bind("keypress", function(e){
                    var selected = e.key;
                    var maxlength = attrs[maxlength];
                    var reg = new RegExp(/^[0-9]+$/);
                    if(!reg.test(selected) && this.value > maxlength){
                        e.preventDefault();
                    }
                })
            }
        };
    }
    
    function checkUser(){
        return {
            restrict:"A",
            require :"ngModel",
            link: function(scope,element,attrs,ctrl){
                var usernames = ["Anish", "Bikash", "Anchal", "Ram"];
                ctrl.$parsers.unshift(userValidation);
                function userValidation(data){
                    console.log(data);
                    if(_.contains(usernames,data)){
                        ctrl.$setValidity("checkuser",false);
                    }else {
                        ctrl.$setValidity("checkuser", true);
                    }
                }
            }
        };
    }
    
    function details(){
        return {
            restrict:"A",
            template:"<input type='text' class='form-control' ng-model='item'>",
            scope: {
                item: "="
            }
        };
    }
    
    
})();