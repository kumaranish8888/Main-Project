(function(){
    
    angular.module("common", []);
    angular.module("common").directive("brandName", [brandName])
    .directive("customNavBar", [customNavBar])
    .directive("orgName", [orgName])
    .directive("details", [details])
    .directive("checkUserName", [checkUserName])
    .directive("onlyNumbers", [onlyNumbers]);
    
  /*  function brandName(){
        
        return {
          template: '<a class="navbar-brand" href="#">{{hc.mybrandName}}</a>'  
        };
        
    } */
    
    function customNavBar(){
        return {
            templateUrl:"app/header/header.tpl.html",
            restrict: "A"
        };
    }
    
    function brandName(){
        return {
            restrict: "A",
            template: '<a class="navbar-brand" href="#">{{companyName}}</a>',
            scope: {
                companyName:"@"
            }
        };
    }
    
    function details(){
        return {
            restrict:"A",
            template: '<input type="text" class="form-control" ng-model="item">',
            scope: {
                item: "="
            }
        };
    }
    
    function checkUserName(){
        return {
            restrict:"A",
            require: "ngModel",
            link: function(scope, element, attrs, ctrl){
                var usernames = ["Anish", "Bikash", "Anchal", "Sandeep"];
                ctrl.$parsers.unshift(validateusername)
                function validateusername(data){
                    console.log(data);
                    if(_.contains(usernames,data)){
                        ctrl.$setValidity("checkuser",false);
                    }else{
                        ctrl.$setValidity("checkuser",true);
                    }
                }
            }
        };
    }
    
    function onlyNumbers(){
        return {
            restrict:"A",
            link: function(scope,element,attrs){
                element.bind("keypress", function(e){
                    var selected = e.key;
                    var maxlength =  attrs[maxlength];
                    var reg = new RegExp(/^[0-9]+$/);
                    if(!reg.test(selected) && this.value.maxlength){
                        e.preventDefault();     
                    }
                });
            }
        };
    }
    
})();