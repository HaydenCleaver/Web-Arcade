//Page elements
let displayScore = document.getElementById('score');
let gameSpace = document.getElementById('Game');
let startScreen = document.getElementById('welcome');
let startButton = document.getElementById('start');
let gameOver = document.getElementById('finalScore');
let finalScoreEl = document.getElementById('showFinalScore');
let restartButton = document.getElementById('restart');
let highScoreEl = document.getElementById('highScore');


//Game starting event listener

startButton.addEventListener('click', function (event) {
    startScreen.style.visibility = 'hidden';
    
    //set how fast spawn is here
    let start = setInterval(createButton, 1000);//<--Spawn rate
    timer();
    setTimeout(() => {
        clearInterval(start);
    }, timerNum * 1000);

});

//Restart game
restartButton.addEventListener('click', function () {
    gameOver.style.visibility = 'hidden';
    startScreen.style.visibility = 'visible';
    timerNum = 20;
    score = 0
    timerEl.style.color = 'black';
});

//setting global score variable as well as array to save data
let score = 0;
let allScores = readScore()|| [];

//Click sound effect
function playSound() {
    let sound = new Audio("sound/Tick.mp3");
    sound.volume = 0.1;
    sound.play();
}


let timerNum = 30;//<----set Timer length here
let timerEl = document.getElementById('timer');
timerEl.textContent = timerNum;
function timer() {
    let ding2 = new Audio("sound/CD_high.mp3");
    let timerInterval = setInterval(() => {
        timerNum--;
        timerEl.textContent = timerNum;

        //when timer hits 0
        timerWarning();
        if (timerNum === 0) {
            clearTheBoard();
            clearInterval(timerInterval);
            allScores.push(score);
            saveScore(allScores);
            //delay for showing final score
            setTimeout(() => {
                gameOver.style.visibility = "visible";
            }, 1000);
            ding2.play();
            finalScoreEl.textContent = score;
            highScoreEl.textContent = calculateHighScore();



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
        }, 2000);
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
    let top = getRandomInt(0, 85);
    let right = getRandomInt(0, 91.5);
    let left = getRandomInt(0, 91.5);
    let bottom = getRandomInt(0, 85);
    let button = new Button(top, right, left, bottom);
}
//Currently not being used
function clearTheBoard() {
   let pieces = document.querySelectorAll('.gamePiece')
pieces.forEach(piece =>{
    piece.remove();
})
//  pieces.target.remove();
}

//saving and loading score functions

function saveScore(data) {
    let saveData = JSON.stringify(data);
    localStorage.setItem('allScores', saveData);
}

function readScore() {
    
    let savedScore = [];
    if (localStorage.getItem('allScores')) {
        savedScore = JSON.parse(localStorage.getItem('allScores'));
        return savedScore;
    }
}

function calculateHighScore(){
    let highScore = 0
    allScores.forEach(element => {
        if (element > highScore) {
            highScore = element;
        }
    });
    let save = JSON.stringify(highScore);
    localStorage.setItem('highScore',save);
    return highScore;
};
let formEl = document.getElementById("userInput")

//New user constructor

function User(name,userScore){
this.name = name;
this.score = userScore;

}

let infoEl =readUser() || [];//<---- User data array
formEl.addEventListener('submit', function(event){
    event.preventDefault();
    let UserName = event.target.initials.value;
    let newUser = new User(UserName,score);
    infoEl.push(newUser);
    userSave(infoEl);
})
//Saving user data
function userSave(data){
    let saveData = JSON.stringify(data);
    localStorage.setItem('user',saveData);
}
//reading user data to save to an array
function readUser() {
     let savedUser = [];
    if (localStorage.getItem('user')) {
        savedUser = JSON.parse(localStorage.getItem('user'));
        return savedUser;
    } else 
    return savedUser;
}