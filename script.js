'use strict';

let msg = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let input = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let high = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let yourScore = 20;
let highScore = 0;

console.log(secretNumber);
checkBtn.addEventListener('click', function () {
    const inputVal = Number(input.value);

    if (!inputVal) {
        msg.textContent = "Pick a number!";
    } else if (inputVal === secretNumber) {
        msg.textContent = "Good job!!!! YOU WON";
        document.body.style.backgroundColor = "#60b347";
        number.textContent = secretNumber;
        if (yourScore > highScore) {
            highScore = yourScore;
            high.textContent = highScore;
        }
    } else if (inputVal < secretNumber) {
        if (yourScore === 0) {
            msg.textContent = "FUCK YOU, YOU LOST";
            checkBtn.disabled = true;
        }
        else {
            yourScore--;
            score.textContent = yourScore;
            msg.textContent = "Nice try, too low";
        }
    } else if (inputVal > secretNumber) {
        if (yourScore === 0) {
            msg.textContent = "FUCK YOU, YOU LOST";
            checkBtn.disabled = true;
        }
        else {
            yourScore--;
            score.textContent = yourScore;
            msg.textContent = "Nice try, too high";
        }
    }
});

againBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = "#222";
    msg.textContent = "Start guessing...";
    number.textContent = "?";
    score.textContent = "20";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    input.value = "";
    yourScore = 20;
    console.log(secretNumber);
});
