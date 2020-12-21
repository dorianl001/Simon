//buttons
let red = document.getElementById("red-button");
let green = document.getElementById("green-button");
let blue = document.getElementById("blue-button");
let yellow = document.getElementById("yellow-button");
let startButton = document.querySelector("startFunc");

//click event  
function clickButton() {
    console.log("It's alive!");
}

//the sequence the game will initiate
let initialSeq = Array(4).fill().map((element, index) => index + 0);
console.log(initialSeq)

//the sequence the user will repeat
let userSeq = [];

//start button 
 startButton = document.querySelector("#startFunc");

//click event listener for the startButton
startButton.addEventListener("click", startFunc)


function startFunc() {
    startButton.setAttribute("display", "hidden");
}

 //randomizer 
 function randNumber() {
     let gameButtons = ["red", "green", "blue", "yellow"]
    var randNum = Math.floor(Math.random() * gameButtons.length);
    //initialSeq.push(randNum)
    return randNum 
}

//add intervals
for (let i = 0; i < 4; i++) {
    setTimeout( () => console.log(initialSeq[i]), i * 3000)
}

//dom manipulation for buttons to light up in a random sequen

//this variable will keep track of the number of rounds played
let level = 0;

//create a function that will start the next sequence of clicks/new round
function newRound() {
    level += 1;
} 