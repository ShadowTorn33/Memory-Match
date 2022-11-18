const cards = document.querySelector('.all-cards')
const img1 = document.querySelector('img')
const img2 = document.querySelector('img')

let clicked = null
let arr = []


cards.addEventListener('click', (evt) => {
    clicked = evt.target.src
    // arr.push(clicked)
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