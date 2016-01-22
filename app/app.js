var app = angular.module("myApp",[]);
app.controller('employeesCtrl', function($scope, $http) {
    $scope.names={};
    $scope.predicate='Name';
    $scope.reverse = true;
    $scope.showRow = false;
    $scope.modify = false;
    var dataset = {};



    $scope.order = function(predicate){
        $scope.predicate = predicate;
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;

    };
    $scope.setRow = function(){
        $scope.showRow = true;
    }

    $scope.relod = function(showRow){
        console.log("inside ok ngclick");
        $scope.showRow=!showRow
        $scope.names.push($scope.newRow);
        $scope.newRow={};



    }

    $scope.afterEdit = function(){
        console.log("inside after Edit");
        $scope.modify=!$scope.modify;
        dataset = angular.copy($scope.names)
        console.log(dataset);



    }

    $scope.edit=function(){
        $scope.modify=true;
        dataset = angular.copy($scope.names)
        console.log(dataset);
    }

    $scope.cancel = function(){
        $scope.names = angular.copy(dataset);
        $scope.modify=!$scope.modify;


    }

    $scope.delete = function(index){
        console.log("inside after delete");
        $scope.names.splice( $scope.names.indexOf(index),1)




    }
    $http.get("http://localhost:3000/records")
        .then(function (response) {
            $scope.names = response.data;
        });
});