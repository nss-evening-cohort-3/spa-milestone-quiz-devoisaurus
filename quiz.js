"use strict"
	var inCars = document.getElementsByClassName("container");
	console.log("inCars1", inCars);

var CarLot = (function populatePage (oldCarLot){

	oldCarLot.displayCars = function(inventory){
		var inCars = document.getElementsByClassName("container");
		var seeTheCars="";
		console.log("seeTheCars1", seeTheCars);
		for (var i = 0; i < inventory.length; i++) {
			console.log("i", i);
			var currentCar = inventory[i];
			console.log("inventory", currentCar);
			seeTheCars+= `<div id="output" class="row"><div class="col-xs-4">
			<p>${currentCar.year} ${currentCar.make} ${currentCar.model}</p>
			<p>Price: ${currentCar.price}</p> Color:  ${currentCar.color} 
			<p>${currentCar.purchased}</p>
			<p>Description: ${currentCar.description}</p>
			</div></div>`
			console.log("seeTheCars", seeTheCars);

			inCars.innerHTML += seeTheCars;
		};

  // Loop over the inventory and populate the page 

}
	return oldCarLot;
}(CarLot));

// console.log("inCars2", inCars);
// console.log("seeTheCars2", seeTheCars);
// console.log("loadInventory", CarLot.loadInventory);


  // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }
// Load the inventory and send a callback function to be
// invoked after the process is complete


CarLot.loadInventory(populatePage);