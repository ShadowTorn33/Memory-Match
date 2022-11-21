const cards = document.querySelector('.all-cards')
const modal = document.querySelector('.modal')
const button = document.querySelector('.btn')

let card = document.querySelectorAll('.front')
let clicked = null
let arr = []
let card1, card2 = null
let firstCard = false
let cardCount = 0

function endGame() {
    if(cardCount === 8) {
        modal.style.display = 'flex'
        return modal
    }
}
endGame()

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
        } else if(this !== card1 || card2){

        }    
    }
}

window.addEventListener('load', (evt) => {
    button.onclick = function() {
        location.reload()
    }
})

card.forEach(cards => cards.addEventListener('click', showCard))

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
