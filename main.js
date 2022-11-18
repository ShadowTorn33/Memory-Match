const card = document.querySelectorAll('.front-of-card')

let click1 = null
let click2 = null
card.forEach(frontOfCard => {
    frontOfCard.addEventListener('click', (evt) => {
    //   click1 = evt.srcElement
    //   click2 = evt.srcElement
      if(click1 === null) {
        click1 = evt.srcElement
      } else if (click2 === null){
        click2 = evt.srcElement
      } else if (click1 === click2 && click1 !== null) {
         console.log("game over you win")
      }

    })

})

// Create a function that has an if statement to compair if the 2 clicks are the same.




// card.addEventListener('click', (e) => {
//     console.log('You clicked the image!')
// })