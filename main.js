const cards = document.querySelector('.all-cards')
const modal = document.querySelector('.modal')
const playAgainButton = document.querySelector('.btn')
const shuffle = document.querySelectorAll('.all-cards')


let card = document.querySelectorAll('.front')
let clicked = null
let arr = []
let allCards = []
let card1, card2 = null
let firstCard = false
let cardCount = 0

// This keeps track of matched cards and brings up the modal at the end.
function endGame() {
    if(cardCount === 8) {
        modal.style.display = 'flex'
        return modal
    }
}
endGame()

// This function flips the card.
function showCard() {
    this.classList.add('hide')
    if(!firstCard) {
        firstCard = true // If set to true it means the player is clicking on the second card
        card1 = this
    } else {
        firstCard = false // Means the player is clicking card1 which is your first click
        card2 = this

    if(card1 === card2) {
        card1.removeEventlistener('click', showCard)
        card2.removeEventlistener('click', showCard)
        }    
    }
}

// This resets the board
window.addEventListener('load', (evt) => {
    playAgainButton.onclick = function() {
        location.reload()
    }
})



// Listens for click and applys my showCard function
card.forEach(cards => cards.addEventListener('click', showCard))

// This listens for a click and checks if there a match.
cards.addEventListener('click', (evt) => {
    clicked = evt.target.id
    console.log(evt.target.id)
    if(cards !== evt.target) {
        if(arr.length === 1){
            if(arr[0] === clicked){
                cardCount += 1
                endGame()
                arr = []
            } else {
                setTimeout( () => {
                    card1.classList.remove('hide')
                    card2.classList.remove('hide')
                }, 500)
                arr = []
            }
        } else {
            arr.push(clicked)
        }
    }
})


function shuffleCards() {
    
    
    for(let i = shuffle.length - 1; i > 0; i--) {
        const d = Math.floor(Math.random() * (i + 1))
        let randomCard = shuffle[d]
        shuffle[d] = shuffle[i]
        shuffle[i] = randomCard
    }
}
shuffleCards()


playAgainButton.addEventListener('click', shuffleCards)