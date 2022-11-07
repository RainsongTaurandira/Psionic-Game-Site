const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

const coinArray = ["Banker", "Player"];
let score = [0,0];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", tossCoin);
} 

function tossCoin(e) {
    let playerGuess =  e.target.innerText;
    let computerToss = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "Cards dealt mean " + computerGuess + "<br>";
    let output;
    if(playerGuess === computerGuess) {
        //win
        output = "Player Wins";
        score[0]++;
    } else {
        //loss
        output = "House Wins";
        score[1]++;
    }

    message.innerHTML = output + "<br>Player: " + score[0] + "  ~~~  House: " + score[1];
}

