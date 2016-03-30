var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;

    },
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();


      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        CarLot.displayCars(inventory);
      });

      inventoryLoader.open("GET", "inventory.JSON")
      inventoryLoader.send();
    }
  };

})();
CarLot.loadInventory();
// console.log("displayCars", CarLot.displayCars);

