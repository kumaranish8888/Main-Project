(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("brandName", [brandName]);
    angular.module("common").directive("customNavbar", [customNavbar]);
    angular.module("common").directive("details", [details]);
    angular.module("common").directive("numbersOnly", [numbersOnly]);
    angular.module("common").directive("checkuserName", [checkuserName]);
    
    
    
  //  function brandName(){
  //      return {
  //          template: '<a class="navbar-brand" href="#">{{hc.mybrandName}}</a>'  
  //      };
  //  }
    
    function customNavbar (){
        return {
            templateUrl: "app/header/header.tpl.html",
            restrict: "A"
        };
    }
    
    function details(){
        return {
            restrict: "A",
            template : '<input type="text" class="form-control" ng-model="item">',
            scope: {
                item: "="
            }
        };
    }
    
    function brandName(){
        return {
            restrict:"A",
            template: '<a class="navbar-brand" href="#">{{companyName}}</a>',
            scope: {
                companyName: "@"
            }
        };
    }
    
    function numbersOnly(){
        return {
            restrict:"A",
            require: "ngModel",
            link : function(scope, element, attrs){
                element.bind("keypress", function(e){
                    var maxlength = attrs[maxlength];
                    var selected = e.key;
                    var reg = new RegExp(/^[0-9]+$/);
                    if(!reg.test(selected) && this.value >maxlength){
                        e.preventDefault();
                    }
                })
            }
        };
    }
    
    function checkuserName (){
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attrs, ctrl){
                ctrl.$parsers.unshift(checkValidity);
                function checkValidity(data){
                    var usernames = ["Bikash", "Sandeep", "Ram", "Shyam"];
                    if(_.contains(usernames,data)){
                        ctrl.$setValidity("checkuser", false);
                    }else {
                        ctrl.$setValidity("checkuser", true);
                    }
                }
            }
        };
    }
    
    
    
    
    
    
    
    
    
    
    
    
})();