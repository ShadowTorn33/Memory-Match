// const img1 = document.getElementById('#jolly')
// const img2 = document.getElementById('#photo')


// const imgObj = [
    //     {Ace: "./Images/Ace.jpeg"},
    //     {Ace: "./Images/Ace.jpeg"},
    //     {Brook: "./Images/Brook.jpeg"},
    //     {Brook: "./Images/Brook.jpeg"},
    //     {Chopper: "./Images/Chopper.jpeg"},
    //     {Chopper: "./Images/Chopper.jpeg"},
    //     {Franky: "./Images/Franky.jpeg"},
    //     {Franky: "./Images/Franky.jpeg"},
    //     {Jimbei: "./Images/Jimbei.jpeg"},
    //     {Jimbei: "./Images/Jimbei.jpeg"},
    //     {Luffy: "./Images/Luffy.jpeg"},
    //     {Luffy: "./Images/Luffy.jpeg"},
    //     {Luffy2: "./Images/Luffy2.jpeg"},
    //     {Luffy2: "./Images/Luffy2.jpeg"},
    //     {Marco: "./Images/Marco.jpeg"},
    //     {Marco: "./Images/Marco.jpeg"},
    // ]
    
    // function createBoard() {
        //     for (let i = 0; i < imgObj.length; i++){
            //         const card = document.createElement('img')
            //         card.setAttribute('src', './Images/Jolly-Roger.jpeg')
            //         card.setAttribute('data-id', i)
            //         cards.appendChild(card)
            //         console.log(card)
            //     }
            // }
            // createBoard()
            

const container = document.querySelector('.container')
const cards = document.querySelector('.all-cards')

let card = document.querySelectorAll('.front').forEach(item => {
    item.addEventListener('click', (evt) => {
        evt.target.style.display = 'none'
        
    })
})


let clicked = null
let clicked2 = null
let arr = []
let board = []
let card1, card2
let show = null

function showCard() {
    
}
showCard()

cards.addEventListener('click', (evt) => {
    clicked = evt.target.id
    if(arr.length === 1){
        if(arr[0] === clicked){
            console.log('true')
            arr = []
        } else {
            console.log('false')
            arr = []
        }
    } else {
        arr.push(clicked)
        
    }
    console.log(arr)

})










// Create a function that has an if statement to compair if the 2 clicks are the same.



// function checkIfCardsMatch() {
//     if(img1 === img2){
//     return true
//     } else if(img1 !== img2)
//     return false
// }
// console.log(checkIfCardsMatch)

// card.addEventListener('click', (e) => {
//     console.log('You clicked the image!')
// })