let cardArr = []
let sum = 0
let isAlive = false
let hasBJack = false

const startBtn = document.getElementById("startBtn")
const cardBtn = document.getElementById('cardBtn')
const cardText = document.getElementById('cards')
const windowText = document.getElementById('window')
const sumTotal = document.getElementById('sum')

startBtn.addEventListener('click', function() {
    renderGame()
    windowText.textContent = "Want to draw a new card?"
    startGame()
})

cardBtn.addEventListener('click', function() {
    newCard()
})

function getRandomCard(){
 let randomNumber = Math.floor( Math.random()*13 ) + 1

 if (randomNumber > 10){
    return 10
 } else if (randomNumber === 1){
    return 11
 } else{
    return randomNumber
 }

}

function startGame(){
    isAlive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cardArr = [card1, card2]
    sum = card1 + card2
    renderGame()
}

function renderGame(){
    cardText.textContent = "Cards: "
    for (let i = 0; i < cardArr.length; i++) {
        cardText.textContent += cardArr [i] + " "
    }

    sumTotal.textContent = "Sum: " + sum
    if (sum <=20) {
        windowText.textContent = "Want to draw a new card?"
    } else if(sum ===21) {
        windowText.textContent = "You've got blackJack"
        hasBJack = true
    } else {
        windowText.textContent = "You're out of the game!"
        isAlive = false
    }

}

function newCard(){
    if (isAlive=== true && hasBJack === false){
        let newNum = getRandomCard()
        cardArr.push(newNum)
        sum += newNum
        renderGame()
    }
  
}