"use strict"

	CarLot = (function(oldCarLot){

    oldCarLot.displayCars = function(inventory){
        var inCars = document.getElementById("container-fluid");
        var seeTheCars="";
        for (var i = 0; i < inventory.length; i++) {
            var currentCar = inventory[i];
            var currentBorder = `"border: 2px solid ${currentCar.color}"`;
            seeTheCars += `<div class="carCard col-xs-4" style=${currentBorder}>
            <p>${currentCar.year} ${currentCar.make} ${currentCar.model}</p>
            <p>Price: ${currentCar.price}</p> Color:  ${currentCar.color} 
            <p>Availability: ${currentCar.purchased}</p>
            <p class="oldCopy">Description: ${currentCar.description}</p>
            </div></div>`

            inCars.innerHTML = seeTheCars;
        };

        		oldCarLot.activateEvents = function (carCards) {
			for (var i = 0; i < carCards.length; i++) {
				carCards[i].addEventListener("click", function(e){
					let clickTarget = e.target.closest("div");
                    selectCopy(e);  

				})
			}

            var copyEntry = document.getElementById("copyChange");
            var newCopy = document.getElementsByClassName("oldcopy");
            var originalCard = document.getElementsByClassName("carCard");
            var replaceCopy;


            function selectCopy (event) {
                replaceCopy = event.target.closest(".oldCopy");
                copyEntry.value="";
                copyEntry.focus();
                var myCopy = copyEntry.addEventListener("keyup", changeCopy);

            };

            function changeCopy(event) {
                replaceCopy.innerHTML = copyEntry.value;
            }

            function changeCard (event) {
                var parkedCar = document.getElementsByClassName("carCard");
                for (var i = 0; i < parkedCar.length; i++) {
                    parkedCar[i].style.borderWidth = "2px";
                    parkedCar[i].style.background = "white";
                };
                event.target.closest(".carCard").style.borderWidth = "thick";
                event.target.closest(".carCard").style.background = "thistle";
            }

            for (var i = 0; i < originalCard.length; i++) {
                originalCard[i].addEventListener("click", changeCard);
            };

		};

  // Loop over the inventory and populate the page 

}
    return oldCarLot;
}(CarLot));

CarLot.loadInventory(CarLot.displayCars);