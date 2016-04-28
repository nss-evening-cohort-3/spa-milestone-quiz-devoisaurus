"use strict"


 CarLot = (function(oldCarLot){
		oldCarLot.activateEvents = function (carCards) {
			for (var i = 0; i < carCards.length; i++) {
				carCards[i].addEventListener("click", function(e){
					let clickTarget = e.target.closest("div");
				})
			}
			var copyEntry = document.getElementById("copyChange");
			var newCopy = document.getElementsByClassName("copy");
			var borderUp = document.getElementsByClassName("carCard");
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

		return oldCarLot

	})(CarLot);