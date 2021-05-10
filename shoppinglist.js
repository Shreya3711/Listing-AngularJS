var app = angular.module('App',[]);

app.controller('ShoppingListController', ShoppingListController);
ShoppingListController.$inject =['ShoppingListCheckService']
function ShoppingListController(ShoppingListCheckService){
	this.items = ShoppingListCheckService.getToBuyList();

	this.buyItem = function(index){
		ShoppingListCheckService.buyItem(index);
	}
}

app.controller('ShoppingListBoughtController', ShoppingListBoughtController);
ShoppingListBoughtController.$inject =['ShoppingListCheckService']
function ShoppingListBoughtController(ShoppingListCheckService){
	this.items = ShoppingListCheckService.getAlreadyBoughtList();
}

app.service('ShoppingListCheckService', ShoppingListCheckService);
function ShoppingListCheckService(){	
		var ToBuy = 
		[{name: "Cookie",quantity: "12 bags"},
		{name: "Cake", quantity: "2 piece" },
		{name: "Vegetables", quantity: "3 kgs"},
		{name: "Milk", quantity: "2 bottles" },
		{name: "Juice", quantity: "5 bottles"}];
		var AlreadyBought= [];

		this.buyItem = function(index){
			var item = ToBuy[index];
			ToBuy.splice(index,1);
			AlreadyBought.push(item);
		};

		this.getToBuyList = function(){
			return ToBuy;
		};

		this.getAlreadyBoughtList = function(){
			return AlreadyBought;
		};
	}


