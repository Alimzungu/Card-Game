let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message=""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById ("cards-el")

let player = {
    name: "Ali",
    chips: 180
}
let PlayerEl = document.getElementById ("player-el")
PlayerEl.textContent = player.name + ": $"+ player.chips

console.log(cards)

//function get random number when clicking the newcard button
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if( randomNumber > 10){
    return 10
    } else if (randomNumber === 1){
    return 11
    }else{
        return randomNumber
    }
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    isAlive = true
    renderGame()
}
function renderGame(){ 
    cardsEl.textContent = "Cards: "
// a loop to render out all the cards instead of only two
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
 if(sum <= 20){
     message='Draw Another Card'
 } else if(sum === 21){
     message='Hurray you won the blackjack'
     hasBlackJack = true
     console.log(isAlive)
} else {
     message='You are out of the game'
     isAlive = false
     console.log(isAlive) 
}
messageEl.textContent = message
}

function newCard(){
    //get a new card if the game is alive and has no blackjack 
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    startGame()
    }
}




// practicing mathematical expressions to get a true or a false
// console.log(4===3)
// console.log(5>2)
// console.log(12>12)
// console.log(3>=3)
// console.log(3<0)
// console.log(11<=11)
// console.log(3<=2)



//variable to keep track of the executed function

// let age=22
// if(age<21){
//     console.log("Under 21 years are not allowed in this Club")
// } else {
//     console.log("Welcome")
// }

// let age = 10

// if (age<100){
//     console.log("Not Eligible")
// } else if(age===100){
//     console.log("Here is your Birthday Card from King Mzungu")
// } else {
//     console.log("not eligible tou already gotten one")
// }

