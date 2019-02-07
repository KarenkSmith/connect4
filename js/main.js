

var currentPlayer;

var winner = null

var p1 = [];
var p2 = [];

document.querySelector("table").addEventListener("click", handleMove);


const winCombo = [[0,6,12,18], [6,12,18,24], [12,18,24,30], [18,24,30,36],
                [1,7,13,19], [7,13,19,25], [13,19,25,31], [19,25,31,37],
                [2,8,14,20], [8,14,20,26], [14,20,26,32], [20,26,32,38],
                [3,9,15,21], [9,15,21,27], [15,21,27,33], [21,27,33,39],
                [4,10,16,22], [10,16,22,28],[16,22,28,34], [22,28,34,40],
                 [5,11,17,23],[11,17,23,29], [17,23,29,35], [23,29,35,41],
                 [0,1,2,3], [1,2,3,4], [2,3,4,5],[6,7,8,9], [7,8,9,10], [8,9,10,11],
                [12,13,14,15], [13,14,15,16], [14,15,16,17], [18,19,20,21],[19,20,21,22], [20,21,22,23],
                 [24,25,26,27], [25,26,27,28], [26,27,28,29], [30,31,32,33],[31,32,33,34],[32,33,34,35],
                 [36,37,38,39], [37,38,39,40], [38,39,40,41], [23,28,33,38], [17,22,27,32], [22,27,32,37],
                [11,16,21,26], [16,21,26,31], [21,26,31,36],[5,10,15,20], [10,15,20,25],[15,20,25,30],
                [4,9,14,19], [9,14,19,24], [3,8,13,18], 
                [2,9,16,23], [1,8,15,22], [8,15,22,29], [0,7,14,21], [7,14,21,28], [14,21,28,35],
                [6,13,20,27], [13,20,27,34],[20,27,34,41], [12,19,26,33], [19,26,33,40],
                 [18,25,32,39]];

function getWinner() {
    for(var i = 0; i < winCombo.length; i++) {

            if(p1.includes(winCombo[i][0]) 
                && p1.includes(winCombo[i][1]) 
                && p1.includes(winCombo[i][2]) 
                && p1.includes(winCombo[i][3]) 
                ){
                var winMessage = document.getElementById("message");
                winMessage.innerHTML = "LOCK HIM UP!<br> MUELLER WON!";
                winMessage.style.display = "flex"

                winner = 'p1'
                gameover=true;
            }
            if(p2.includes(winCombo[i][0]) 
                && p2.includes(winCombo[i][1]) 
                && p2.includes(winCombo[i][2]) 
                && p2.includes(winCombo[i][3]) 
                ){
                document.getElementById("message")
                var winMessage = document.getElementById("message");
                winMessage.innerHTML = "NO 1 IS BETER <br> AT CONEKT 4 <br> THAN ME! SAD!";
                winMessage.style.display = "flex"

                winner = 'p2'
                gameover = true;
            }
        // }
    }
    return "hello"

}


init();

function init () {
     
} 

currentPlayer = 0;
function playerTurn () {
    currentPlayer = currentPlayer % 2;
    if(currentPlayer === 0 ) {
        currentPlayer++;
        return "url(\"images/mueller.jpg\")";
    }else if(currentPlayer === 1){
        currentPlayer++;
        return "url(\"images/trump.jpeg\")";
    }
}
var gameover = false;
var counter = 0
function handleMove(evt) {
    // obtain index of square
    var clickAbles = [0,6,12,18,24,30,36];
    var idx = Number(evt.target.id);
    if (clickAbles.indexOf(idx) !== -1 && gameover===false) { ``
        
        // var move = evt.target.closest("tr").lastElementChild;
        console.log(document.getElementById(`${parseInt(idx) + 5}`).style.background === '')
        
        if(document.getElementById(`${parseInt(idx) + 5}`).style.background === ''){
            document.getElementById(`${parseInt(idx) + 5}`).style.background = playerTurn();
            document.getElementById(`${parseInt(idx) + 5}`).style.backgroundSize = "contain";
            // document.getElementById(`${parseInt(idx) + 5}`).appendChild(`
            //    
            // `)
            if(counter % 2 === 0){
                p1.push(parseInt(idx) + 5)
                getWinner()
                counter++
            }
            else {
                p2.push(parseInt(idx) + 5)
                getWinner()
                counter++
            }
        }
        else if(document.getElementById(`${parseInt(idx) + 4}`).style.background === ''){
            document.getElementById(`${parseInt(idx) + 4}`).style.background = playerTurn();
            document.getElementById(`${parseInt(idx) + 4}`).style.backgroundSize = "contain";
            if(counter % 2 === 0){
                p1.push(parseInt(idx) + 4)
                getWinner()
                counter++
            }
            else {
                p2.push(parseInt(idx) + 4)
                getWinner()
                counter++
            }
        }
        else if(document.getElementById(`${parseInt(idx) + 3}`).style.background === ''){
            document.getElementById(`${parseInt(idx) + 3}`).style.background = playerTurn();
            document.getElementById(`${parseInt(idx) + 3}`).style.backgroundSize = "contain";
            if(counter % 2 === 0){
                p1.push(parseInt(idx) + 3)
                getWinner()
                counter++
            }
            else {
                p2.push(parseInt(idx) + 3)
                getWinner()
                counter++
            }
        }
        else if(document.getElementById(`${parseInt(idx) + 2}`).style.background === ''){
            document.getElementById(`${parseInt(idx) + 2}`).style.background = playerTurn();
            document.getElementById(`${parseInt(idx) + 2}`).style.backgroundSize = "contain";
            if(counter % 2 === 0){
                p1.push(parseInt(idx) + 2)
                getWinner()
                counter++
            }
            else {
                p2.push(parseInt(idx) + 2)
                getWinner()
                counter++
            }
        }
        else if(document.getElementById(`${parseInt(idx) + 1}`).style.background === ''){
            document.getElementById(`${parseInt(idx) + 1}`).style.background = playerTurn();
            document.getElementById(`${parseInt(idx) + 1}`).style.backgroundSize = "contain";
            if(counter % 2 === 0){
                p1.push(parseInt(idx) + 1)
                getWinner()
                counter++
            }
            else {
                p2.push(parseInt(idx) + 1)
                getWinner()
                counter++
            }
        }
        else if(document.getElementById(`${parseInt(idx)}`).style.background === ''){
            document.getElementById(`${parseInt(idx)}`).style.background = playerTurn();
            document.getElementById(`${parseInt(idx)}`).style.backgroundSize = "contain";
            if(counter % 2 === 0){
                p1.push(idx)
                getWinner()
                counter++
            }
            else {
                p2.push(idx)
                getWinner()
                counter++
            }
        }
        else {
            alert("not a valid move!")
        }    
        console.log(counter)
        
    } 
}

    
    function clickedButton () { 
            location.reload();
            }
        
    

  

