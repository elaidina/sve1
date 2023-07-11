document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "There´s a bridge across the river."
    },
    {
      name: '1',
      img: 'Det finns en bro över floden.'
    },
    {
      name: '2',
      img: "It doesn´t matter."
    },
    {
      name: '2',
      img: 'Det spelar ingen roll.'
    },
    {
      name: '3',
      img: 'We can drink water or orange juice.'
    },
    {
      name: '3',
      img: 'Vi kan dricka vatten eller apelsinjuice.'
    },
    {
      name: '4',
      img: "You´re swimming like a dog."
    },
    {
      name: '4',
      img: 'Du simmar som en hund.'
    },
    {
      name: '5',
      img: 'I´m swimming like a cat.'
    },
    {
      name: '5',
      img: 'Jag simmar som en katt.'
    },
    {
      name: '6',
      img: "Can you speak English?"
    },
    {
      name: '6',
      img: 'Kan du prata engelska?'
    },
    {
      name: '7',
      img: 'I am leaving on Monday.'
    },
    {
      name: '7',
      img: 'Jag åker på måndag.'
    },
    {
      name: '8',
      img: 'I am very sorry that I have to leave.'
    },
    {
      name: '8',
      img: 'Jag är väldigt ledsen att jag måste lämna.'
    },
    {
      name: '9',
      img: 'We would like to say good-bye to you.'
    },
    {
      name: '9',
      img: 'Vi skulle vilja säga hejdå till dig.'
    },
    {
      name: '10',
      img: 'It´s a pitty, that you are leaving.'
    },
    {
      name: '10',
      img: 'Det är synd att du lämnar.'
    },
    {
      name: '11',
      img: 'Take care and good luck.'
    },
    {
      name: '11',
      img: 'Ta hand om dig och lycka till.'
    },
    {
      name: '12',
      img: 'I enjoy a lot of snow in January.'
    },
    {
      name: '12',
      img: 'Jag njuter av mycket snö i januari.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 19 completed!</h2><a href='https://elaidina.github.io/sve1/level20.html'> Continue to Level 20</a>";


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
