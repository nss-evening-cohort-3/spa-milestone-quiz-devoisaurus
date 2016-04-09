"use strict"

var carCards = document.getElementsByClassName("row");
console.log("card test", carCards);


 CarLot = (function(oldCarLot){
		oldCarLot.activateEvents = function (carCards) {
			for (var i = 0; i < carCards.length; i++) {
				carCards[i].addEventListener("click", function(e){
					console.log("howdy!");
					let clickTarget = e.target.closest("div");
					console.log("clickTarget", clickTarget);
				})
			}
			var copyEntry = document.getElementById("copyChange");
			console.log("copyEntry", copyEntry);
			var newCopy = document.getElementsByClassName("copy");
			console.log("newCopy", newCopy);
			var borderUp = document.getElementsByClassName("carCard");
			console.log("borderUp", borderUp);
			var replaceCopy;

			function selectCopy (event) {
				replaceCopy = event.target.closest(".carCard").childNodes[i].childNodes[0];
				copyEntry.focus();
				console.log("replaceCopy", replaceCopy);
				console.log("copyEntry", copyEntry);
				var myCopy = copyEntry.addEventListener("keyup", changeCopy);
				console.log("myCopy", myCopy);
				console.log("copyEntry", copyEntry);
				console.log("changeCopy", changeCopy);
			};

			function changeCopy(event) {
				replaceCopy.innerHTML = copyEntry.value;
			}


		};

		return oldCarLot

	})();