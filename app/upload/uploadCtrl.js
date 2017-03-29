(function(){
    
 //   var app = angular.module('fileUpload', ['ngFileUpload']);
 
        app.controller('MyCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    // upload later on form submit or something similar 
        $scope.submit = function() {
            if ($scope.form.file.$valid && $scope.file) {
                $scope.upload($scope.file);
            }
        };
    
})();