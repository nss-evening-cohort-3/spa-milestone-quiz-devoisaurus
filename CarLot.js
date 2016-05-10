"use strict"

  // let carCards = document.getElementsByClassName("carCard");

var CarLot = (function () {
  let inventory = [];


  return {
    getInventory: function () {
      return inventory;

    },
    loadInventory: function (displayCars) {
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
        displayCars(inventory);
      });

      inventoryLoader.open("GET", "inventory.JSON")
      inventoryLoader.send();
    }
  };

})();



