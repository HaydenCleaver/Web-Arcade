//Page elements
let displayScore = document.getElementById('score');
let gameSpace = document.getElementById('Game');
let startScreen = document.getElementById('welcome');
let startButton = document.getElementById('start');
let gameOver = document.getElementById('finalScore');
let finalScoreEl = document.getElementById('showFinalScore');
let restartButton = document.getElementById('restart');

//Game starting event listener
startButton.addEventListener('click', function (event) {
    startScreen.style.visibility = 'hidden';
    let start = setInterval(createButton, 200);
    timer();
    setTimeout(() => {
        clearInterval(start);
    }, timerNum * 1000);;

});

//Restart game
restartButton.addEventListener('click', function () {
    gameOver.style.visibility = 'hidden';
    startScreen.style.visibility = 'visible';
    timerNum = 20;
    score = 0
    timerEl.style.color = 'black';
});



//Click sound effect
function playSound() {
    let sound = new Audio("sound/Tick.mp3");
    sound.volume = 0.1;
    sound.play();
}
//set Timer length here
let timerNum = 20;
let timerEl = document.getElementById('timer');
timerEl.textContent = timerNum;
function timer() {
    let ding2 = new Audio("sound/CD_high.mp3");
    let timerInterval = setInterval(() => {
        timerNum--;
        timerEl.textContent = timerNum;
        console.log(timerNum);

        //when timer hits 0
        timerWarning();
        if (timerNum === 0) {
            clearInterval(timerInterval);

            //delay for showing final score
            setTimeout(() => {
                gameOver.style.visibility = "visible";
            }, 1000);

            finalScoreEl.textContent = score;
            ding2.play();
        }
    }, 1000);

}
function timerWarning() {
    let ding1 = new Audio("sound/CD_low.mp3");

    if (timerNum <= 5) {
        ding1.play();
        ding1.volume = 0.2;
        timerEl.style.color = 'red';
    }

}
//stops whatever interval is passed
function stopGame(game) {
    clearInterval(game);
}
//setting global score variable
let score = 0;

//button constructor
function Button(pos1, pos2, pos3, pos4) {
    // let newButton = document.createElement('div')
    this.obj = document.createElement('div'),
        this.obj.classList.add('gamePiece')
    gameSpace.appendChild(this.obj),
        this.obj.style.position = 'absolute',
        this.obj.style.top = `${pos1}%`,
        this.obj.style.right = `${pos2}%`,
        this.obj.style.left = `${pos3}%`,
        this.obj.style.bottom = `${pos4}%`,

        //this decides how fast the buttons disappear
        setTimeout(() => {
            this.obj.remove()
        }, 1000);
    this.obj.addEventListener('click', function (event) {
        playSound();
        score += 1;
        event.target.remove()

    })

}

// Generating random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// creating button and setting random ints for positions 
function createButton() {
    let top = getRandomInt(0, 91.5);
    let right = getRandomInt(0, 91.5);
    let left = getRandomInt(0, 91.5);
    let bottom = getRandomInt(0, 98);
    let button = new Button(top, right, left, bottom)
}

function clearTheBoard(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
