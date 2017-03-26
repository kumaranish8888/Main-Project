(function(){
        
    angular.module("products", []);
    
    angular.module("products").controller("productsCtrl", ["productsSvc","$rootScope","$scope",productsCtrl]);
    
    angular.module("products").service("productsSvc", ["$http", "$q",productsSvc]);
    
    function productsCtrl(productsSvc, $rootScope, $scope){
        var pc = this;
        $scope.items = 5;
        $scope.priceCriteria  = "Price";
        productsSvc.getProducts().then(function(response){
            
            pc.myProducts =  response;
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        $scope.addToCart = function(item){
            $rootScope.$broadcast("ADD-ITEM-TO-CART");
            console.log(item);
            $scope.selectedProduct = item;
        }
        
        $scope.showMore = function(){
            $scope.items += 10;
        }
        
        $scope.pricing = function(){
            if($scope.priceCriteria == "Price"){
                $scope.priceCriteria = "-Price";
            }else{
                $scope.priceCriteria = "Price";
            }
        }
        
        
    }
    
    function productsSvc($http, $q){
        var ps = this;
        var dfd = $q.defer();
        ps.getProducts = function(){
            
            $http.get("api/products.json").then(function(response){
                
                dfd.resolve(response.data.products);
            }).catch(function(response){
                
                dfd.reject({message:"Error"});
            });
            return dfd.promise;
        }
        
    }
    
})();