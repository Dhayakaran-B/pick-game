"use strict";
//shortcuts for choosing elements
const scoreEl1 = document.querySelector("#score--0");
const scoreEl2 = document.querySelector("#score--1");
const diceroll = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const hold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const currentScore1 = document.querySelector("#current--0");
const currentScore2 = document.querySelector("#current--1");
dice.classList.add("hidden");
//needed values for the game
let currentPlayer = 0;
let diceNum = 0;
let score1 = 0;
let score2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let gameon = 0;

//when dice is rolled
diceroll.addEventListener("click", function () {
  if (gameon === 0) {
    diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNum}.png`;
    dice.classList.remove("hidden");

    //when the current player is 1
    if (currentPlayer == 0) {
      if (diceNum === 1) {
        score1 = 0;
        currentPlayer = 1;
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");

        currentScore1.textContent = 0;
      } else {
        score1 += diceNum;
        currentScore1.textContent = score1;
      }
    }

    //when the current player is 2
    else {
      if (diceNum === 1) {
        score2 = 0;
        currentPlayer = 0;
        document.querySelector(".player--1").classList.remove("player--active");
        document.querySelector(".player--0").classList.add("player--active");
        currentScore2.textContent = 0;
      } else {
        score2 += diceNum;
        currentScore2.textContent = score2;
      }
    }
  }
});

//when hold button is clicked
hold.addEventListener("click", function () {
  //if current player is 1
  if (gameon === 0) {
    if (currentPlayer == 0) {
      totalScore1 += score1;
      document.querySelector("#score--0").textContent = totalScore1;
      currentScore1.textContent = 0;
      score1 = 0;
      if (totalScore1 >= 100) {
        document.querySelector("#name--0").textContent = "player 1 wins!";
        gameon = 1;
      } else {
        currentPlayer = 1;
        currentScore1.textContent = 0;
        score1 = 0;
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
      }
    }

    //if current player is 2
    else {
      totalScore2 += score2;
      document.querySelector("#score--1").textContent = totalScore2;
      currentScore2.textContent = 0;
      if (totalScore2 >= 100) {
        document.querySelector("#name--1").textContent = "player 2 wins!";
        gameon = 1;
        score2 = 0;
      } else {
        currentPlayer = 0;
        currentScore2.textContent = 0;
        score2 = 0;
        document.querySelector(".player--1").classList.remove("player--active");
        document.querySelector(".player--0").classList.add("player--active");
      }
    }
  }
});

//when new game is clicked
newGame.addEventListener("click", function () {
  currentPlayer = 0;
  diceNum = 0;
  score1 = 0;
  score2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  gameon = 0;
  document.querySelector("#name--0").textContent = "Player 1";
  document.querySelector("#name--1").textContent = "player 2";
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
});
