/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard();
};

function generateRandomCard() {
  const icons = [
    // {
    //   name: "hearts",
    //   image: "/workspaces/Andyalpa-pt72-RandomCard/src/assets/img/hearts.png"
    // },
    // {
    //   name: "clubs",
    //   image: "/workspaces/Andyalpa-pt72-RandomCard/src/assets/img/clubs.png"
    // },
    // {
    //   name: "spades",
    //   image: "/workspaces/Andyalpa-pt72-RandomCard/src/assets/img/spades.png"
    // },
    // {
    //   name: "diamond",
    //   image: "/workspaces/Andyalpa-pt72-RandomCard/src/assets/img/diamond.png"
    // }

    "♥",
    "♦",
    "♠",
    "♣"
  ];
  const numbers = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9"];

  const icon = Math.floor(Math.random() * icons.length);
  const number = Math.floor(Math.random() * numbers.length);

  document.querySelector(".randomCardValue").innerHTML = numbers[number];
  const cardIcons = document.querySelectorAll("#topleft, #bottomright");

  cardIcons.forEach(cardIcon => {
    cardIcon.innerHTML = icons[icon];
  });

  console.log(icons[icon], numbers[number]);
}

document.querySelector(".btn").addEventListener("click", function() {
  generateRandomCard();
});

function startTimer() {
  let timeleft = 10;

  const updateProgressBar = () => {
    if (timeleft <= 0) {
      generateRandomCard();
      timeleft = 10;
    }
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
  };

  updateProgressBar();

  setInterval(updateProgressBar, 1000);
}

startTimer();
