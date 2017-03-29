(function(){
    
    angular.module("register", []);
    
    angular.module("register").controller("registerCtrl", ["registerSvc","$scope","$state",registerCtrl]);
    
    angular.module("register").service("registerSvc", ["$http","$q",registerSvc]);
    
    function registerCtrl(registerSvc, $scope, $state){
        var rc = this;
        rc.user ={};
        
        registerSvc.getCountries().then(function(response){
            rc.myCountries = response;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        $scope.goToState=function(){
            $state.go("success");
        }
        
        
    }
    
    function registerSvc($http,$q){
        var rs = this;
        var dfd = $q.defer();
        
        rs.getCountries = function(){
        $http.get("api/countries.json").then(function(response){
            
        dfd.resolve(response.data.countries);
        }).catch(function(response){
            
            dfd.reject({message:"Error"})
        });
        
        return dfd.promise;
        }
        
    }
    
})();