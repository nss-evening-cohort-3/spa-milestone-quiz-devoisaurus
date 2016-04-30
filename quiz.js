"use strict"

    var CarLot = (function(oldCarLot){

    oldCarLot.displayCars = function(inventory){
        var inCars = document.getElementById("container-fluid");
        var seeTheCars="";
        for (var i = 0; i < inventory.length; i++) {
            var currentCar = inventory[i];
            var currentBorder = `"border: 2px solid ${currentCar.color}"`;
            seeTheCars += `<div class="carCard col-xs-4" style=${currentBorder}>
            <p>${currentCar.year} ${currentCar.make} ${currentCar.model}</p>
            <p>Price: ${currentCar.price}</p> <p>Color:  ${currentCar.color}</p>
            <p>Availability: ${currentCar.purchased}</p>
            <p class="oldCopy">Description: ${currentCar.description}</p>
            </div>`

            inCars.innerHTML = seeTheCars;
        };

        CarLot.activateEvents();

            //     oldCarLot.activateEvents = function (carCards) {
            // for (var i = 0; i < carCards.length; i++) {
            //     carCards[i].addEventListener("click", function(e){
            //         let clickTarget = e.target.closest("div");
            //         console.log("target", e.target.closest("div"));
            //         selectCopy(e);

            //     })
            // }

            var copyEntry = document.getElementById("copyChange");
            var newCopy = document.getElementsByClassName("oldCopy");
            var originalCard = document.getElementsByClassName("carCard");
            var replaceCopy;


            oldCarLot.selectCopy = function(event) {
                replaceCopy = event.currentTarget.lastElementChild;
                console.log("replaceCopy", replaceCopy);
                copyEntry.value="";
                copyEntry.focus();
                copyEntry.addEventListener("keyup", changeCopy);


            };

            function changeCopy(event) {
                replaceCopy.innerHTML = copyEntry.value;
            }


            for (var i = 0; i < originalCard.length; i++) {
                originalCard[i].addEventListener("click", function(e){
                    CarLot.changeCard(e);
                });
            };

        };

    return oldCarLot;
  // Loop over the inventory and populate the page

})(CarLot || {});

CarLot.loadInventory(CarLot.displayCars);