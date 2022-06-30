const words = ["alligator", "anaconda", "cobra", "echidna", "gazelle", "ibex", "ibis", "llama", "tiger" ];

let wordKey = [];
let wordKeyVal = ['a','l','l','i','g','a','t','o','r','l','a','a','z','m','e','c','h','i','d','n','a','a','l','i','n',
                'l','n','a','t','i','g','e','r','g','c','b','o','o','i','b','e','x','n','s','d','c','o','b','r','a'];
let scoreEl = document.getElementById('score');

for (i = 0; i < 50; i++){
    wordKey.push("iv_" + i);
}

console.log(wordKey);
console.log(wordKeyVal);

let userScore = 0;

function keyCheck(event){
    for (let i = 0; i < wordKey.length; i++){
        console.log(event.target.id);
        if (event.target.id === wordKey[i] && event.target.value.toLowerCase() === wordKeyVal[i]){
            let squareEl = document.getElementById(event.target.id);
            squareEl.setAttribute("disabled","");
            userScore++;
            console.log(userScore);
            scoreRender();
        }
    }
    
    console.log(event.target.value.toLowerCase())
}

function scoreRender(){
    scoreEl.textContent = `User Score: ${userScore}`;
}

function clearPuzzle(){
    puzzleEl.forEach(function(input){
    puzzleEl.textcontent = "";
    });
}



