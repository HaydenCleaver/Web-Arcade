const squares = document.querySelectorAll('.square')
const squareColor = document.querySelector('.box')
const timeLeft = document.getElementById('#time-left')
const score = document.getElementById('#score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('box')
    })

   let randomPosition = squares [Math.floor(Math.random() * 9)]
   randomPosition.classList.add('box')
}

function moveSquare() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500)
}

moveSquare();
