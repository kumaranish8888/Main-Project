(function(){
    
    angular.module("products", []);
    
    angular.module("products").controller("productsCtrl", ["productsSvc", "$rootScope", "$scope", productsCtrl]);
    
    angular.module("products").service("productsSvc", ["$http",productsSvc]);
    
    function productsCtrl(productsSvc, $rootScope, $scope){
        var pc = this;
        productsSvc.getProducts().then(function(response){
            
           pc.myProducts =  response.data.products; 
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        $scope.addToCart = function(item){
            $rootScope.$broadcast("ADD-ITEM-TO-CART");
        }
        
    }
    
    function productsSvc($http){
        var ps = this;
        ps.getProducts = function(){
            return $http.get("api/products.json");
        }
        
    }
    
})();