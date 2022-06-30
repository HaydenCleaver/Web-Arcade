const words = ["alligator", "anaconda", "cobra", "echidna", "gazelle", "ibex", "ibis", "llama", "tiger" ];

let wordKey = [];
let wordKeyVal = ['a','l','l','i','g','a','t','o','r','l','a','a','z','m','e','c','h','i','d','n','a','a','l','i','n',
                'l','n','a','t','i','g','e','r','g','c','b','o','o','i','b','e','x','n','s','d','c','o','b','r','a'];
let scoreEl = document.getElementById('score');
let user = '';
let userScore = 0;

for (i = 0; i < 50; i++){
    wordKey.push("iv_" + i);
}

// console.log(wordKey);
// console.log(wordKeyVal);


let puzzleEl = document.querySelectorAll('input');

//checks unique value assigned to input elements against letter value assigned to block
function keyCheck(event){
    for (let i = 0; i < wordKey.length; i++){
        console.log(event.target.id);
        if (event.target.id === wordKey[i] && event.target.value.toLowerCase() === wordKeyVal[i]){
            let squareEl = document.getElementById(event.target.id);
            squareEl.setAttribute("disabled","");
            userScore++;
            console.log(userScore);
            scoreRender();
            saveScore(userScore);
        }
    }
    
    // console.log(event.target.value.toLowerCase())
}

function scoreRender(){
    scoreEl.textContent = `User Score: ${userScore}`;
}

// function clearPuzzle(){
//     puzzleEl.forEach(function(input){
//     puzzleEl.textcontent = "";
//     });
// }

let userEl = document.getElementById('userInitals');

function saveScore(data) {
    let saveData = JSON.stringify(data);
    localStorage.setItem('totalScores', saveData);
}

function readScore() {

    let savedScore = [];
    if (localStorage.getItem('totalScores')) {
        savedScore = JSON.parse(localStorage.getItem('totalScores'));
        return savedScore;
    }
}

let formEl = document.getElementById("userInitials")

//New user constructor

function User(name, userScore) {
    this.name = name;
    this.score = userScore;

}

let infoEl = readUser() || [];//<---- User data array
console.log(infoEl)
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    let UserName = event.target.initials.value;
    UserName = UserName.toUpperCase();
    let newUser = new User(UserName, userScore);
    infoEl.push(newUser);
    userSave(infoEl);
    saveScore(userScore)
})
//Saving user data
function userSave(data) {
    let saveData = JSON.stringify(data);
    localStorage.setItem('userName', saveData);
}

//reading user data to save to an array
function readUser() {
    let savedUser = [];
    if (localStorage.getItem('userName')) {
        savedUser = JSON.parse(localStorage.getItem('userName'));
        console.log(savedUser);
        return savedUser;
    } else
        return savedUser;
}
