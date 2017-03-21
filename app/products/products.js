(function(){
    
    angular.module("products", []);
    
    angular.module("products").controller("productsCtrl", ["productsSvc", "$rootScope", productsCtrl]);
    
    function productsCtrl(productsSvc, $rootScope){
        var pc = this;
        
        productsSvc.getProducts().then(function(response){
            
            pc.myProducts = response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        pc.addToCart = function(data){
            $rootScope.$broadcast("ADD-ITEM-TO-CART");
        }
        
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