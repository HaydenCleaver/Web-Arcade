const cardArray = [
    {
        name: 'apple',
        Image: 'imgs/apple.png',
    },
    {
        name: 'banana',
        Image: 'imgs/banana.png',
    },
    {
        name: 'grape',
        Image: 'imgs/grape.png',
    },
    {
        name: 'kiwi',
        Image: 'imgs/kiww.png',
    },
    // {
    //     name: 'lime',
    //     Image: 'imgs/lime.png',
    // },
    {
        name: 'orange',
        Image: 'imgs/orange.png',
    },
    {
        name: 'pear',
        Image: 'imgs/pear.png',
    },
    {
        name: 'apple',
        Image: 'imgs/apple.png',
    },
    {
        name: 'banana',
        Image: 'imgs/banana.png',
    },
    {
        name: 'grape',
        Image: 'imgs/grape.png',
    },
    {
        name: 'kiwi',
        Image: 'imgs/kiww.png',
    },
    // {
    //     name: 'lime',
    //     Image: 'imgs/lime.png',
    // },
    {
        name: 'orange',
        Image: 'imgs/orange.png',
    },
    {
        name: 'pear',
        Image: 'imgs/pear.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < 12; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/background.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(card, i)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

   if (cardsChosen[0] == cardsChosen[1]) {
    alert('you found a match!')
    cards[optionOneId].setAttribute('src', 'imgs/white.png')
    cards[optionTwoId].setAttribute('src', 'imgs/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
   } else {
    cards[optionOneId].setAttribute('src', 'imgs/background.png')
    cards[optionTwoId].setAttribute('src', 'imgs/background.png')
   }

   cardsChosen = []
   cardsChosenIds = []

   if (cardsWon.length == (cardArray.length/2)) {
    resultDisplay.innerHTML = 'You have won!'
}

}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].Image)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}