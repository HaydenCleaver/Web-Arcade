
let displayScore = document.getElementById('score');
let gameSpace = document.getElementById('Game');
let startScreen = document.getElementById('welcome');
let startButton = document.getElementById('start');

//Game starting event listener
startButton.addEventListener('click',function(event){
    startScreen.style.visibility = 'hidden';
    let start = setInterval(createButton, 200);
    timer();
    setTimeout(() => {
        clearInterval(start);
    }, 30000);;

});

//set Timer length here
let timerNum = 30;
function timer(){
   
    let timerInterval = setInterval(() => {
        timerNum -- ;
        let timerEl = document.getElementById('timer');
        timerEl.textContent = timerNum;
        console.log(timerNum);
        if (timerNum === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
  
}
//stops whatever interval is passed
function stopGame(game){
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
        this.obj.addEventListener('click',function(event){
            score += 1;
            displayScore.textContent= score;
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

