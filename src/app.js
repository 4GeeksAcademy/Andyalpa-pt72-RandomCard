/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard();
};

let countdownInterval;

function generateRandomCard() {
  const icons = [
    // Left my previous code as reference of what I was trying to do with icons...lol
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
    if (icons[icon] === "♥" || icons[icon] === "♦") {
      cardIcon.style.color = "red";
    } else {
      cardIcon.style.color = "black";
    }
  });

  const randomCardValue = document.querySelector(".randomCardValue");
  if (icons[icon] === "♥" || icons[icon] === "♦") {
    randomCardValue.style.color = "red";
  } else {
    randomCardValue.style.color = "black";
  }

  console.log(icons[icon], numbers[number]);
}

const btn = document.querySelector(".btn");
const myRandomCard = document.querySelector(".myRandomCard");

btn.addEventListener("click", function() {
  // Add the animation class
  myRandomCard.classList.add("animate__animated", "animate__headShake");

  // Clear the interval and generate a new card
  clearInterval(countdownInterval);
  generateRandomCard();
  startTimer();
});

// Listen for the animation to end
myRandomCard.addEventListener("animationend", function() {
  // Remove the animation class
  myRandomCard.classList.remove("animate__animated", "animate__headShake");
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

  countdownInterval = setInterval(updateProgressBar, 1000);
}

startTimer();
