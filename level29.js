document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Something special was happening in my life.'
    },
    {
      name: '1',
      img: 'Något speciellt hände i mitt liv.'
    },
    {
      name: '2',
      img: 'It was my birtday that very day!'
    },
    {
      name: '2',
      img: 'Det var min födelsedag just den dagen!'
    },
    {
      name: '3',
      img: 'I have never seen a kangaroo before.'
    },
    {
      name: '3',
      img: 'Jag har aldrig sett en känguru förut.'
    },
    {
      name: '4',
      img: 'What can a kangaroo do, anyway?'
    },
    {
      name: '4',
      img: 'Vad kan en känguru göra egentligen?'
    },
    {
      name: '5',
      img: 'Nobody knew.'
    },
    {
      name: '5',
      img: 'Ingen visste.'
    },
    {
      name: '6',
      img: 'How horrible!'
    },
    {
      name: '6',
      img: 'Vad hemskt!'
    },
    {
      name: '7',
      img: 'I would hate that!'
    },
    {
      name: '7',
      img: 'Jag skulle hata det!'
    },
    {
      name: '8',
      img: 'What if she can catch mice?'
    },
    {
      name: '8',
      img: 'Vad händer om hon kan fånga möss?'
    },
    {
      name: '9',
      img: 'Maybe even the spiders would be scared to live there.'
    },
    {
      name: '9',
      img: 'Kanske till och med spindlarna skulle vara rädda för att bo där.'
    },
    {
      name: '10',
      img: 'What if she can give milk?'
    },
    {
      name: '10',
      img: 'Tänk om hon kan ge mjölk?'
    },
    {
      name: '11',
      img: 'I couldn´t stand that!'
    },
    {
      name: '11',
      img: 'Jag kunde inte stå ut med det!'
    },
    {
      name: '12',
      img: 'I ´m too young for that!'
    },
    {
      name: '12',
      img: 'Det är jag för ung för!'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  /* function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const cardd = document.createElement('div')
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = i+1
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    }
  } */


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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 29 completed!</h2><a href='https://elaidina.github.io/sve1/leve30.html'> Continue to Level 30</a>";


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
