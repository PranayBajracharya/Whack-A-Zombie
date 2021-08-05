"use strict";

const zombies = document.getElementsByClassName("zombie");
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.getElementById("score");
const highscore = document.getElementById("highscore");
const start = document.querySelector('#start');
let timeUp = false;
let lastHole;
let score = 0;
const gametime = 15000;
let high = localStorage.getItem("highscore");
if(!high) high=0;
highscore.textContent = high;

for (let i = 0; i < zombies.length; i++) {
  zombies[i].addEventListener('click', function () { 
    this.parentNode.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
  });
}

function Game() {
  start.textContent = "Whack! Whack!!";
  start.disabled = true;
  start.style.color = 'black';
  score = 0;
  scoreBoard.textContent = '0';
  timeUp = false;
  peek();
  setTimeout(() => {
    timeUp = true;
    start.textContent = "Time Up! Try Again?";
    start.disabled = false;
  }, gametime);
  setTimeout(() => {
    //console.log("am i workng?");
    if(high < score) {
      high = score;
      localStorage.setItem("highscore", high);
      highscore.textContent = high;
    }
  }, gametime+700); 
}

function uptime(max, min) {
  return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes) {
  const id = Math.floor(Math.random() * holes.length);
  const hole = holes[id];
  if (hole == lastHole){
    //console.log("feri");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peek() {
<<<<<<< HEAD
  const time = uptime(650, 400);
=======
  const time = uptime(700, 420);
  //console.log(time);
>>>>>>> fc811100337c135a0d07ba56280cfc96f3c08a6e
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peek();
  }, time);
}

function Back() {
  document.getElementById("back").textContent = "Xaina Home :("
}
