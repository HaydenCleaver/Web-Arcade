const squares = document.querySelectorAll('.square')
const squareColor = document.querySelector('.box')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0 
let hitPosition 
let currentTime = 30

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('box')
    })

   let randomPosition = squares [Math.floor(Math.random() * 9)]
   randomPosition.classList.add('box')

   hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (squares.id == hitPosition) {
            result++ 
            score.textContent = result
            hitPosition = null
            console.log('hi')
        }
    })
})

moveSquare();

function moveSquare() {
    let timerId = null;
    timerId = setInterval(randomSquare, 400)
}

function timer() {
currentTime--
timeLeft.textContent = currentTime

if (currentTime == 0) {
    clearInterval(countDownTimerId)
    alert('Game Over! Your score is ' + result)
}
}

let countDownTimerId = setInterval(timer, 1000)