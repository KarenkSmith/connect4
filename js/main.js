// start game - clear board
// getWinner
//switch turns 
//drop pieces upon click

// const 
var currentPlayer;
const playerArray = [];

const winCombo = [[35, 28, 21, 14], [28, 21, 14, 7], [21,14,7,0], [36,29,22,15],
                [29,22,15,8], [22,15,8,1], [2,9,16,23], [9,16,23,30],[16,23,30,37],[3,10,17,24], [10,17,24,31], [17,24,31, 38], 
                [4,11,18,25], [11,18,25,32], [18,25,32,39],[5,12,19,26], [12,19,26,33],[19,26,33,40], [6,13,20,27], [13,20,27,34],
                [20,27,34,41], [0,1,2,3], [1,2,3,4],[2,3,4,5], [3,4,5,6],[7,8,9,10], [8,9,10,11], [9,10,11,12], [10,11,12,13],
                [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20], [21,22,23,24], [22,23,24,25,], [23,24,25,26], [24,25,26,27],
                [28,29,30,31], [29,30,31,32], [30,31,32,33], [31,32,33,34],[35,36,37,38], [36,37,38,39], [37,38,39,40], [38,39,40,41],
                [21,15,9,3], [28,22,16,10],[22,16,10,4], [35,29,23,17], [29,23,17,11], [23,17,11,5],[36,30,24,18], [30,24,18,12],[24,18,12,6],
                [37,31,25,19], [31,25,19,13], [38,32,26,20],[3,11,19,27], [2,10,18,26], [10,18,26,34],[1,9,17,25], [9,17,25,33], [17,25,33,41],
                [40,32,24,16], [32,24,16,8], [24,26,8,0], [7,15,23,31], [15,23,31,39],[38,30,22,14]];
// cached element references 


// evt listeners
document.getElementById("ball").addEventListener("mouseover", playerTurn);
// document.getElementById("ball").addEventListener("mouseover", trumpTurn);

// document.getElementById("ball").addEventListener("mouseout", );
  //create hover over with russian and american flags
// functions

// $('#ball').mouseOver(function(){
//     $('#ball').css('backgroundColor', blue);
// })

init();

function init () {
     currentPlayer = 0;
} 
// if cell is empty, store current player move into an array
// check for winner, if no winner, switch turn 

 
var x = 0;
var y = 0;

function playerTurn () {
    currentPlayer = currentPlayer % 2;
    if(currentPlayer === 0 ){
        document.getElementById("ball").style.backgroundColor = "green";
    }else{
        document.getElementById("ball").style.backgroundColor = "red";
    }
    // console.log(target.id);
    
    currentPlayer++;
  
}


 




// function getWinner(idx) {
//     if (idx === "mueller" && idx - 1 === "mueller" && idx -2 === "mueller" && idx - 3 ==="mueller")
//     console.log("you've made america great again")
// }

    

    //store player click in array - test array against winning combos array to check for winner
