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
                replaceCopy = event.target.closest(".carCard").childNodes[6].nextElementSibling;
                copyEntry.value="";
                copyEntry.focus();
                var myCopy = copyEntry.addEventListener("keyup", changeCopy);

            };

            function changeCopy(event) {
                replaceCopy.innerHTML = copyEntry.value;
            }

            function changeCard (event) {
                event.target.closest(".carCard").style.borderWidth = "thick";
                event.target.closest(".carCard").style.background = "pink";
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