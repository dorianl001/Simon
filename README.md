![Winter GIF](https://media.giphy.com/media/oxLsWbH1rvy2A/giphy.gif)

# Simon
# Project Description: A short description of your game.
My Simon game will test your memory and reaction time by 
making you repeat the sequence of colored buttons in a 
timely manner. If you touch the wrong button or if you 
take too long to press the right sequence, the game will 
reset. Each round will progressively get faster as the 
sequences become more difficult to remember and repeat.

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.

## Technologies used

HTML5 was used to frame the website, CSS to style the website, and JavaScript for
all the interactive features.

Link to the project website: https://dorianl001.github.io/Simon/

# Project Issues
I had trouble randomizing my sequence to challenge the user
## Description
Uncaught ReferenceError: i is not defined
    at HTMLButtonElement.startFunc (demo3.js:58)

## Code Snippet
function startFunc(){
    for (let i = 0; i < 4; i++) {
        setTimeout( () => console.log("squareNumber", initialSeq[i]), i * 3000)
        }
        console.log(initialSeq[i])
    if(initialSeq[i] == 0){
    setTimeout( () => {red.style.border = "thick solid #0000FF";}, 600)
    setTimeout( () => {red.style.border = "none";}, 2000)
    }else if(initialSeq[i] == 1){
    setTimeout( () => {green.style.border = "thick solid #0000FF";}, 600)
    setTimeout( () => {green.style.border = "none";}, 2000)
    }}

## Your Error
I was trying to refactor my previous code to make it cleaner when my previous code was working.

## Why you think you're getting this error
I think I got the error from changing my code which made i the iterator have a null value. 

## Everything you've tried
changing scope, re-arranging the order of the code, researching other methods, console logging the results for more insight,
eventually I went back to my original code. 

## 1. Design
![wireframe 1](https://i.imgur.com/su1EHDo.png)
![wireframe 2](https://i.imgur.com/E9dToM1.png)
 


## 2. MVP Goals
* As a player, I want the game to provide a countdown so I know when to start the game.
* As a player, I want to know if I chose the wrong button.
* As a player, I want the game to become increasingly difficult (speed and sequence)
* As a player, I want to know what round I am in.
* As a designer, I want the design to look pleasing to the eyes.

## 3. Stretch Goals

* As a player, I would like to see a timer in order to know how much time I have to repeat a given sequence.* `outerHTML`
* As a player, I would like to hear metal music for the suspense and thrill aspect of the game.
* As a player, I would like to be allowed to repeat a sequence once per round.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
