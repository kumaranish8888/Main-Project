(function(){
    
    angular.module("login", []);
    
    angular.module("login").controller("loginCtrl", ["loginSvc", loginCtrl]);
    
    function loginCtrl(loginSvc){
        var lc = this;
        loginSvc.getCountries().then(function(response){
            
            lc.myCountries = response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
    angular.module("login").service("loginSvc", ["$http", "$q", loginSvc]);
    
    function loginSvc($http, $q){
        
        var ls = this;
        var anish = $q.defer();
        
        ls.getCountries = function(){
            
            $http.get("api/countries.json").then(function(response){
                
                anish.resolve(response.data.countries);
            }).catch(function(response){
                
                anish.reject({message:"Error"})
            });
            
            return anish.promise;
            
        }
    }
    
})();