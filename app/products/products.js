(function(){
    
    angular.module("products", []);
    
    angular.module("products").controller("productsCtrl", ["productsSvc", productsCtrl]);
    
    function productsCtrl(productsSvc){
        var pc = this;
        
        productsSvc.getProducts().then(function(response){
            
            pc.myProducts = response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
    angular.module("products").service("productsSvc", ["$http", "$q", productsSvc]);
    
    function productsSvc($http, $q){
        
        var ps = this;
        var anish = $q.defer();
        
        ps.getProducts = function(){
            
            $http.get("api/products.json").then(function(response){
                
                anish.resolve(response.data.products);
            }).catch(function(response){
                
                anish.reject({message:"Error"})
            });
            
            return anish.promise;
        }
        
        
    }
    
})();