"use strict"

var CarLot = (function(oldCarLot){

 	oldCarLot.changeCard = function(event) {
      var parkedCar = document.getElementsByClassName("carCard");
      for (var i = 0; i < parkedCar.length; i++) {
          parkedCar[i].style.borderWidth = "2px";
          parkedCar[i].style.background = "white";
      };
      event.target.closest(".carCard").style.borderWidth = "thick";
      event.target.closest(".carCard").style.background = "thistle";
  }

return oldCarLot;
} )(CarLot || {})