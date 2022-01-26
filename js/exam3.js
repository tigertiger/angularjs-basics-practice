var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope) {
  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Dog Poison", purchased: false},
    {item: "Bouffant Spray", purchased: false},
    {item: "Saltines", purchased: false},
    {item: "Own Brand Socks", purchased: false},
  ];

  $scope.getList = function() {
return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html"
  };

});