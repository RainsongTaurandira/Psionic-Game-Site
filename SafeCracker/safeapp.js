const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const digits = document.querySelector("#num");

let gamePlay = false;

button.addEventListener("click", function(){
    if(!gamePlay){
        gamePlay = true;
        score = 0;
        gameArea.innerHTML = "";
        let num = parseInt(digits.value);
        maker(num);
        message.innerHTML = "Guess the combination.";
        button.innerHTML = "Check the Combination.";
    }else{
        score++;
        message.innerHTML = "Number of Guesses: " + score;
        const numbers = document.querySelectorAll(".numb");
        let winCondition = 0;
        
        for(let i=0; i<numbers.length; i++){           
            if(numbers[i].value == numbers[i].correct){
                numbers[i].style.backgroundColor = "forestgreen";
                numbers[i].style.color = "white";
                console.log("Match");
                winCondition++;
            }else{
                let color = (numbers[i].value < numbers[i].correct) ? "midnightblue":"maroon";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "palegoldenrod";
                console.log("No Match");
            }
            if(winCondition == numbers.length){
                gameEND();
            }
        }
    }
})

function gameEND(){
    message.innerHTML = "You solved it in " + score;
    gamePlay = false;
    button.innerHTML = "Restart Game";
}

function maker(num){
for(let x=0;x<num;x++){
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = "60px";
    el.classList.add("numb");
    el.order = x;
    el.correct = Math.floor(Math.random()*10);
    el.value = 0;

    gameArea.appendChild(el)
    }
}
    