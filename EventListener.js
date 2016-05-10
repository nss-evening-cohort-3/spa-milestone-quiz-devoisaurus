"use strict"


var CarLot = (function(oldCarLot){
	oldCarLot.activateEvents = function () {
var carCards = document.getElementsByClassName("carCard");
    for (var i = 0; i < carCards.length; i++) {
        carCards[i].addEventListener("click", function(e){
            let clickTarget = e.target.closest("div");
            CarLot.selectCopy(e);

        })
    }

	}
		return oldCarLot;

	})(CarLot || {});