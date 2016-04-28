"use strict"

  let inventory = [];
  let carCards = document.getElementsByClassName("carCard");
  CarLot = (function () {
    return {
      getInventory: function () {
      return inventory;
      },

      loadInventory: function () {
        let inventoryLoader = new XMLHttpRequest();
          inventoryLoader.addEventListener("load", function () {
          inventory = JSON.parse(this.responseText).cars;
          inventory.forEach(function(car){
            if (car.purchased === true) {
              car.purchased = "SOLD"
            }
            else {
              car.purchased = "Still available"
            };
          })
          console.log("inventory", inventory);
          CarLot.displayCars(inventory);
          CarLot.activateEvents(carCards);
        });

        inventoryLoader.open("GET", "inventory.JSON")
        inventoryLoader.send();
      }
    };
    oldCarLot.displayCars = function(inventory) {
      console.log("quiz-inventory", inventory);
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
            </div>`

            inCars.innerHTML = seeTheCars;
        };
 } })(CarLot || {});

  CarLot.loadInventory();


