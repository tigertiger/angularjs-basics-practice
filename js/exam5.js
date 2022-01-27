var app5 = angular.module("app5", []);

app5.controller("gListCtrl", function ($scope) {
  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Dog Poison", purchased: false},
    {item: "Bouffant Spray", purchased: false},
    {item: "Saltines", purchased: false},
    {item: "Own Brand Socks", purchased: false},
  ];

  $scope.addItem = function(newItem) {
    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem, purchase: false
      });
      $scope.missingNewItemError = "";
    } else {
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };
});

app5.controller('userCtrl', function($scope) {
  $scope.user = [{
    fName: "Morj",
    lName: "Crall",
    street: "123 Steerk St",
    subscribe: "Subscribe",
    delivery: "Mail"
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid){
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
      });

      console.log("User Saved");
    } else {
      console.log("Error: Couldn't Save User")
    }

  };
});
