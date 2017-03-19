(function(){
    
    angular.module("posts", []);
    
    angular.module("posts").controller("postsCtrl", ["postsSvc", postsCtrl]);
    
    function postsCtrl(postsSvc){
        var pc = this;
        postsSvc.getPosts().then(function(response){
            
            pc.myPosts = response;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
    angular.module("posts").service("postsSvc", ["$http","$q", postsSvc]);
    
    function postsSvc($http, $q){
        
        var ps = this;
        var dfd = $q.defer();
        ps.getPosts = function(){
             $http.get("api/posts.json").then(function(response){
                 
                 dfd.resolve(response.data.posts);
                 
             }).catch(function(response){
                 dfd.reject({message:"Error"})
             });
            return dfd.promise;
        }
    }
    
})();