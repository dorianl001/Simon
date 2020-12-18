//buttons
let red = document.getElementById("red-button");
let green = document.getElementById("green-button");
let blue = document.getElementById("blue-button");
let yellow = document.getElementById("yellow-button")
//click event 
// 

function clickButton() {
    console.log("it is alive!")
}


// let recordedSeq = [];
//variable simon is the sequence
//add randomization
let initialSeq = Array(4).fill().map((element, index) => index + 0);
console.log(initialSeq)


//add intervals
for (let i = 0; i < 4; i++) {
    setTimeout( () => console.log(initialSeq[i]), i * 3000)
}

//dom manipulation for buttons to light up in a random sequence 



//get loop to flash the button and or div in a sequence  





// user pushes button one 
// function clickButtonOne() {
    
// }

// function alertMe() {
//     alert("times up you lose!!")
// }

// const stopTimerId = setInterval(alertMe, 3000);
