const words = ["alligator", "anaconda", "cobra", "echidna", "gazelle", "ibex", "ibis", "llama", "tiger" ];

let userScore = 0;
let puzzleEl = document.querySelectorAll('input');

function addListener(){

    puzzleEl.forEach(function(input){
    input.addEventListener('keypress', keyValue);
});
}

addListener();

function keyValue(event){
    console.log(event.target.value)
    if (event.target.value === puzzleEl.value){
        userScore++;
        console.log(userScore);
    }
}
