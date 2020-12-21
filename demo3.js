//buttons
let red = document.getElementById("red-button");
let green = document.getElementById("green-button");
// green.style.border = "thick solid #0000FF";
let blue = document.getElementById("blue-button");
// blue.style.border = "thick solid #000000";
let yellow = document.getElementById("yellow-button");
// yellow.style.border = "thick solid #0000FF";
let startButton = document.querySelector("#startFunc");
//stop button
let stopButton = document.querySelector("#stopFunc");

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
    setTimeout( () => {green.style.border = "thick solid #0000FF";}, 500)
    setTimeout( () => {green.style.border = "none";}, 2000)
    // startButton.style.visibility = "hidden"
    // green.style.border = "thick solid #0000FF";
    // green.style.border = "none";
    // yellow.style.border = "thick solid #0000FF";
    console.log("This function works");

    //add intervals
    for (let i = 0; i < 4; i++) {
    setTimeout( () => console.log(initialSeq[i]), i * 3000)
    }
}


function stopFunc() {
    yellow.style.border = "none"
    green.style.border = "thick solid #0000FF";
    // yellow.style.border = "thick solid #0000FF";
    console.log("This stop function works");
}

//click event for stop button
stopButton.addEventListener("click", stopFunc);


 //randomizer 
 function randNumber() {
     let gameButtons = ["red", "green", "blue", "yellow"]
    var randNum = Math.floor(Math.random() * gameButtons.length);
    //initialSeq.push(randNum)
    return randNum 
}


//dom manipulation for buttons to light up in a random sequen

//this variable will keep track of the number of rounds played
let level = 0;

//create a function that will start the next sequence of clicks/new round
function newRound() {
    level += 1;
} 