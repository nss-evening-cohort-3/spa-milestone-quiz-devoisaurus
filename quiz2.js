"use strict"

var CarLot = (function (oldCarLot){

	oldCarLot.displayCars = function(inventory){
		var inCars = document.getElementsByClassName("row")[0];
		var seeTheCars="";
		for (var i = 0; i < inventory.length; i++) {
			var currentCar = inventory[i];
			seeTheCars = `<div class="carCard col-sm-4">
			<p>${currentCar.year} ${currentCar.make} ${currentCar.model}</p>
			<p>Price: ${currentCar.price}</p> Color:  ${currentCar.color}</p>
			<p>Available: ${currentCar.purchased}</p>
			<p>${currentCar.description}</p>
			</div>`

			inCars.innerHTML += seeTheCars;
		};

  // Loop over the inventory and populate the page 

}
	return oldCarLot;
}(CarLot));




 // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }


// Load the inventory and send a callback function to be
// invoked after the process is complete

CarLot.loadInventory(CarLot.displayCars);