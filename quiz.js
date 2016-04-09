"use strict"

	CarLot = (function(oldCarLot){

    oldCarLot.displayCars = function(inventory){
        var inCars = document.getElementsByClassName("row")[0];
        var seeTheCars="";
        for (var i = 0; i < inventory.length; i++) {
            var currentCar = inventory[i];
            seeTheCars += `<div class="carCard col-xs-4">
            <p>${currentCar.year} ${currentCar.make} ${currentCar.model}</p>
            <p>Price: ${currentCar.price}</p> Color:  ${currentCar.color} 
            <p>${currentCar.purchased}</p>
            <p class="oldCopy">Description: ${currentCar.description}</p>
            </div></div>`

            inCars.innerHTML = seeTheCars;
        };

        		oldCarLot.activateEvents = function (carCards) {
			for (var i = 0; i < carCards.length; i++) {
				carCards[i].addEventListener("click", function(e){
					console.log("howdy!");
					let clickTarget = e.target.closest("div");
					console.log("clickTarget", clickTarget);
                    selectCopy(e);
				})
			}

            var copyEntry = document.getElementById("copyChange");
            console.log("copyEntry", copyEntry);
            var newCopy = document.getElementsByClassName("oldcopy");
            console.log("newCopy", newCopy);
            var borderUp = document.getElementsByClassName("carCard");
            console.log("borderUp", borderUp);
            var replaceCopy;

            function selectCopy (event) {
                replaceCopy = event.target.closest(".carCard").childNodes[i].childNodes[0];
                copyEntry.focus();
                console.log("replaceCopy", replaceCopy);
                console.log("copyEntry", copyEntry);
                var myCopy = copyEntry.addEventListener("keyup", changeCopy);
                console.log("myCopy", myCopy);
                console.log("copyEntry", copyEntry);
                console.log("changeCopy", changeCopy);
            };

            function changeCopy(event) {
                replaceCopy.innerHTML = copyEntry.value;
            }
		};

  // Loop over the inventory and populate the page 

}
    return oldCarLot;
}(CarLot));

CarLot.loadInventory(CarLot.displayCars);