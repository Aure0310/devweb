console.log('Jeu démarré');

let box = document.querySelector('.box');
console.log(box);
console.log('Clique sur la box !');

var x=0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

box.addEventListener("click", () => {
    x=x+1;
    if(x==1) {
        startTimer();
       }
    let top = (console.log(x));
    const posX = random(0, window.innerWidth - 100);
    const posY = random(0, window.innerHeight - 100);
    box.style.transform = `translate(${posX}px, ${posY}px)`;
});

var timer = document.getElementById("timer");
var seconds = 0;

function startTimer() {
    interval = setInterval(updateTimer, 1000);
  }

function updateTimer() {
    seconds++;
    timer.innerHTML = (seconds > 9 ? seconds : "0" + seconds);
    if(seconds==30) {
        document.getElementById("score").innerHTML = "Votre score est de " + x + ". Rechargez la page pour recommencer";
        resetTimer();
    }
}

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    timer.innerHTML = "00";
  }
