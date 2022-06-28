let reflexScore = loadReflexScore() || [];
let crosswordScore = loadCrosswordScore() || [];

function loadReflexScore (){
    let stringStore = localStorage.getItem('');
    return JSON.parse(stringStore);
}

function loadCrosswordScore (){
    let stringStore = localStorage.getItem('');
    return JSON.parse(stringStore);
}

function renderScoreReflex(scoreArray){

    let scoreResults = scoreArray.sort((a,b) => b.score - a.score);
    scoreResults.splice(0,3);

    for (let i = 0; i < scoreResults.length; i++){

        let resultTest = `${scoreResults[i].name} : ${scoreResults[i].score}`
        let chartEl = document.getElementById('reflexScore');
        let resultEl = documnt.createElement('li');
        chartEl.appendChild(resultEl);
        resultEl.textContent = resultTest;
    }

function renderScoreCrossword(scoreArray){

    let scoreResults = scoreArray.sort((a,b) => b.score - a.score);
    scoreResults.splice(0,3);

    for (let i = 0; i < scoreResults.length; i++){

        let resultTest = `${scoreResults[i].name} : ${scoreResults[i].score}`
        let chartEl = document.getElementById('crosswordScore');
        let resultEl = documnt.createElement('li');
        chartEl.appendChild(resultEl);
        resultEl.textContent = resultTest;
    }

    // for (let i = 0; i < scoreArray.length; i++) {
    // userName = scoreArray[i].name;
    // scoreResults = scoreArray[i].score;
    
    // let resultTest = `${userName} : ${scoreResults}`
    // let chartEl = document.getElementById('crosswordScore');
    // let resultEl = documnt.createElement('li');
    // chartEl.appendChild(resultEl);
    // resultEl.textContent = resultTest;
    // } 
}

// renderScoreReflex(reflexScore);
// renderScoreCrossword(crosswordScore);

