(function(){
    
    angular.module("register", []);
    
    angular.module("register").controller("registerCtrl", ["registerSvc", registerCtrl]);
    
    angular.module("register").service("registerSvc", ["$http","$q", registerSvc]);
    
    function registerCtrl(registerSvc){
        
        var rc = this;
        registerSvc.getCountries().then(function(response){
            
            rc.myCountries =  response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
    function registerSvc($http, $q){
        
        var rs = this;
        var dfd = $q.defer();
        
        rs.getCountries = function(){
             $http.get("api/countries.json").then(function(response){
                 
                dfd.resolve(response.data.countries); 
             }).catch(function(response){
                 dfd.reject({message: "error"});
             });
            return dfd.promise;
        }
        
    }
    
})();