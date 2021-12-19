function computerTurnGetter(){
    var turnNum = Math.floor(Math.random() * 3) + 1;
    if (turnNum == 1){
        var turn = "rock";
    }
    else if (turnNum == 2){
        var turn = "paper";
    }
    else if (turnNum == 3){
        var turn = "scissors";
    }

    return turn
}

function imageChange(turn){
    document.getElementById("result-image").src = "assets/" + turn + ".png";
}

function textChange(text){
    document.getElementById("result").innerText = text;
}

function turnProcess(turn){
    compTurn = computerTurnGetter()
    if (turn == "rock"){
        if (compTurn == "rock"){
            // draw
            imageChange(compTurn);
            textChange("You played rock and we played rock. Draw!")
        }
        else if (compTurn == "paper"){
            // comp wins
            imageChange(compTurn);
            textChange("You played rock and we played paper. We won!")
        }
        else if (compTurn == "scissors"){
            // human wins
            imageChange(turn);
            textChange("You played rock and we played scissors. You won!")
        }
    }
    else if (turn == "paper"){
        if (compTurn == "rock"){
            // human wins
            imageChange(turn);
            textChange("You played paper and we played rock. You won!")
        }
        else if (compTurn == "paper"){
            // draw
            imageChange(compTurn);
            textChange("You played paper and we played paper. Draw!")
        }
        else if (compTurn == "scissors"){
            // comp wins
            imageChange(compTurn);
            textChange("You played paper and we played scissors. We won!")
        }
    }
    else if (turn == "scissors"){
        if (compTurn == "rock"){
            // comp wins
            imageChange(compTurn);
            textChange("You played scissors and we played rock. We won!")
        }
        else if (compTurn == "paper"){
            // human wins
            imageChange(turn);
            textChange("You played scissors and we played paper. You won!")
        }
        else if (compTurn == "scissors"){
            // draw
            imageChange(compTurn);
            textChange("You played scissors and we played scissors. Draw!")
        }
    }
}

document
    .getElementById("rock")
    .addEventListener("click", function(){
        turnProcess("rock");
})

document
    .getElementById("paper")
    .addEventListener("click", function(){
        turnProcess("paper");
})

document
    .getElementById("scissors")
    .addEventListener("click", function(){
        turnProcess("scissors");
})