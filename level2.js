document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'No, I haven´t'
    },
    {
      name: '1',
      img: 'Nej det har jag inte.'
    },
    {
      name: '2',
      img: 'The sun is shining and it´s warm.'
    },
    {
      name: '2',
      img: 'Solen skiner och det är varmt.'
    },
    {
      name: '3',
      img: 'What would you like to do?'
    },
    {
      name: '3',
      img: 'Vad skulle du vilja göra?'
    },
    {
      name: '4',
      img: 'I would like to go out.'
    },
    {
      name: '4',
      img: 'Jag skulle vilja gå ut.'
    },
    {
      name: '5',
      img: 'Excuse me, who are you?'
    },
    {
      name: '5',
      img: 'Ursäkta mig vem är du?'
    },
    {
      name: '6',
      img: 'Hello, my name is Tom.'
    },
    {
      name: '6',
      img: 'Hej, jag heter Tom.'
    },
    {
      name: '7',
      img: 'Is Tom a good friend?'
    },
    {
      name: '7',
      img: 'Är Tom en bra vän?'
    },
    {
      name: '8',
      img: 'Nej det är det inte.'
    },
    {
      name: '8',
      img: 'No. He´s not.'
    },
    {
      name: '9',
      img: 'That tall boy is my friend.'
    },
    {
      name: '9',
      img: 'Den långa pojken är min vän.'
    },
    {
      name: '10',
      img: 'Come here and sit down.'
    },
    {
      name: '10',
      img: 'Kom hit och sätt dig ner.'
    },
    {
      name: '11',
      img: 'Michelle, lend me your pen, please.'
    },
    {
      name: '11',
      img: 'Misha, snälla låna mig din penna."'
    },
    {
      name: '12',
      img: 'Let´s play with a ball.'
    },
    {
      name: '12',
      img: 'Låt oss spela boll.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length 
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 2 completed!</h2><a href="https://elaidina.github.io/sve1/level3.html"> Continue to Level 3</a>'


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
