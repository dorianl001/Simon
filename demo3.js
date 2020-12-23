//buttons
let red = document.getElementById("red-button");
// red.style.border = "thick solid #0000FF"
let green = document.getElementById("green-button");
// green.style.border = "thick solid #0000FF";
let blue = document.getElementById("blue-button");
// blue.style.border = "thick solid #000000";
let yellow = document.getElementById("yellow-button");
// yellow.style.border = "thick solid #0000FF";
let startButton = document.querySelector("#startFunc");
//stop button
let stopButton = document.querySelector("#stopFunc");


//click function records the users click
function clickButton(event) {
    //console.log(event.target.getAttribute("num"));
    userSeq.push(event.target.getAttribute("num"));
     console.log(userSeq)
     win();
}

//the sequence the game will initiate 
let initialSeq = Array(4).fill().map((element, index) => index + 0);
 console.log("initialSeq", initialSeq)

//the sequence the user will repeat
let userSeq = []; 
//the array should record the repeated sequence to confirm if the user passed the current level
//the next round function initiates a new round and builds upon the current sequence


//start button 
 startButton = document.querySelector("#startFunc");

//click event listener for the startButton
startButton.addEventListener("click", startFunc)

//this variable will keep track of the number of rounds played
let level = 0;

//create a function to update new round
function newRound() {
    level += 1;
    let levelStage = document.querySelector("#level");
    levelStage.innerHTML = `Level: ${level}`;
} 

// buttons array sets the sequence in which buttons light up
let buttons = [red, blue, yellow, green]
let secInitialSeq = [0, 3, 1, 1, 0];
console.log(initialSeq);
//start button function starts the game
function startFunc(){
    for (let i = 0; i < initialSeq.length; i++) {
        setTimeout( () => console.log("squareNumber", initialSeq[i]), i * 800)
        setTimeout( () => {buttons[initialSeq[i]].style.border = "thick solid #000000";}, i * 800)
        setTimeout( () => {buttons[initialSeq[i]].style.border = "none";}, (i * 800) + 500)
    }
    newRound();
}

//stop button function
function stopFunc() {
    yellow.style.border = "none"
    green.style.border = "thick solid #0000FF";
    yellow.style.border = "thick solid #0000FF";
    console.log("This stop function works");
}

//click event for stop button
stopButton.addEventListener("click", stopFunc);

//let randNum = [];

  //randomizer 
//  function randNumber() {
//     let gameButtons = [red, green, blue, yellow]
//     randNum = gameButtons[Math.floor(Math.random() * gameButtons.length)];
//     //initialSeq.push(randNum)

//     console.log(randNum)
//     // return randNum 
// }

// randNumber();


//win function compares initial and user sequence to find out if the user won or lost
function win() {
    let numUserSeqSort = userSeq.map(Number).slice().sort()
    
    initialSeq.length === numUserSeqSort.length && initialSeq.slice().sort().every(function(v, i){
        return v === numUserSeqSort[i];

    }) 
    if (initialSeq === userSeq) {
        console.log("You win!");
    } else {
        console.log("You lose!!");
    }
}                                              
