
var soup = {
	name: "chicken noodle",
	price: 1.50
};

var bread = {
	name: "whole wheat",
	price: 2.50
};

var milk = {
	name: "whole vitamin D",
	price: 1.75
};

var noodles = {
	name:"linguine",
	price: 1.50 
};

var sauce = {
	name:"alfredo",
	price: 1.75
};

var groceryList = [soup, bread, milk, noodles, sauce];
var total = 0;

var groceryListCont = document.createElement('div');
var totalCont = document.createElement('div');

groceryList.forEach(function(element) {
	//console.log(element.name + " " + "$" + element.price);
	groceryListCont.innerHTML += element.name + " " + "$" + element.price; //keep adding the object properties to the innerHTML on each iteration
	total += element.price; //keep adding element.price on each iteration
	

});

totalCont.innerHTML = total; 

document.body.appendChild(groceryListCont);
document.body.appendChild(totalCont);

