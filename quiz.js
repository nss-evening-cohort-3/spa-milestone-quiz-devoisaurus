"use strict"
	var inCars = document.getElementsByClassName("container");
	console.log("inCars1", inCars);

var CarLot = (function populatePage (oldCarLot){
	oldCarLot.displayCars = function(inventory){
		var seeTheCars="";
		console.log("seeTheCars1", seeTheCars);
  // Loop over the inventory and populate the page
  inventory.forEach(function (currentCar) {
  	var carList = inventory[currentCar];
  		seeTheCars += "<div id='make" +currentCar.make+"'>Make:";
  		seeTheCars += `<h2>${currentCar.make}</h2>`;

  		inCars.innerHTML += seeTheCars;

  })
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
// CarLot.loadInventory();