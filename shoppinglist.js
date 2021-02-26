var app = angular.module('App',[]);

app.controller('ShoppingListController', ShoppingListController);
ShoppingListController.$inject =['$scope']
function ShoppingListController($scope, $index){
	$scope.AlreadyBought = [];

	$scope.ToBuy = 
		[{
			name: "Cookie",
			quantity: "12 bags"
		},
		{
			name: "Cake",
			quantity: "2 piece"
		},
		{
			name: "Vegetables",
			quantity: "3 kgs"
		},
		{
			name: "Milk",
			quantity: "2 bottles"
		},
		{
			name: "Juice",
			quantity: "5 bottles"
		}];
	$scope.remove = function($index){
		$scope.name=$scope.ToBuy[$index].name;
		$scope.quantity=$scope.ToBuy[$index].quantity;
		$scope.item = {
			name: $scope.name,
			quantity: $scope.quantity
		} 
		$scope.ToBuy.splice($index, 1);
		$scope.AlreadyBought.push($scope.item);
		console.log($scope.AlreadyBought)
	}
}