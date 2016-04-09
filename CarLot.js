"use strict"

  let inventory = [];
  let carCards = document.getElementsByClassName("carCard");

let CarLot = (function () {


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
        CarLot.displayCars(inventory);
        CarLot.activateEvents(carCards);
      });

      inventoryLoader.open("GET", "inventory.JSON")
      inventoryLoader.send();
    }
  };

})();
// CarLot.loadInventory();


