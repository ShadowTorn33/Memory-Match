const cards = document.querySelector('.all-cards')
const modal = document.querySelector('.modal')
const button = document.querySelector('.btn')

let card = document.querySelectorAll('.front')
let clicked = null
let arr = []
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
        firstCard = true
        card1 = this
    } else {
        firstCard = false
        card2 = this

    if(card1 === card2) {
        card1.removeEventlistener('click', showCard)
        card2.removeEventlistener('click', showCard)
        }    
    }
}

// This resets the board
window.addEventListener('load', (evt) => {
    button.onclick = function() {
        location.reload()
    }
})

// Listens for click and applys my showCard function
card.forEach(cards => cards.addEventListener('click', showCard))

// This listens for a click and checks if there a match.
cards.addEventListener('click', (evt) => {
    clicked = evt.target.id
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
