"use strict"

 let CarLot = (function (oldCarLot) {
    oldCarLot.populatePage = function (inventory) {
    let cards = document.getElementById("container-fluid");
    console.log("cards", cards);
    console.log("CarLot", CarLot);

    inventory.forEach(function(car, index){
      let carCard = buildCard(car, index);
      let cardDiv = document.createElement("div");
      cardDiv.innerHTML = (carCard);
      cards.appendChild(cardDiv);
      let card = document.getElementById(`card--${index}`);
      addClickEvent(card);
    });

    CarLot.activateEvents();
  }

function addClickEvent(card) {
  card.addEventListener("click", function(){
    console.log("howdy!");
  });
}

function buildCard (car, index) {
  let card = "",
  card_wrapper = `<section id="card--${index}" class="card-wrapper" style="border: 2px solid ${carscolor}">`,
  card_title = `<h3>${cars.year} ${car.make} ${car.model}</h3>`,
  card_price = `<div class="car-price">$${car.price}</div>`,
  card_sold = car.purchased ? `<span class="card-sold">SOLD!</span>` :"",
  card_copy = `<p class="card-copy">${car.description}</p>`;

  card += `${card_wrapper + card_title + card_price + card_sold + card_copy}</section>`;
  return card;
}

})

