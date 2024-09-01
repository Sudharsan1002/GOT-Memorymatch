const griddisp = document.querySelector("#grid");
const result = document.querySelector(".points")

const resultdisp=document.querySelector(".pntdisp")

const cardarray = [
  {
    name: "stark",
    img: "images/1.png",
  },
  {
    name: "Targaryan",
    img: "images/2.png",
  },
  {
    name: "Lannister",
    img: "images/3.png",
  },
  {
    name: "Baratheon",
    img: "images/4.png",
  },
  {
    name: "Tyrell",
    img: "images/5.png",
  },
  {
    name: "Martell",
    img: "images/6.png",
  },
  {
    name: "stark",
    img: "images/1.png",
  },
  {
    name: "Targaryan",
    img: "images/2.png",
  },
  {
    name: "Lannister",
    img: "images/3.png",
  },
  {
    name: "Baratheon",
    img: "images/4.png",
  },
  {
    name: "Tyrell",
    img: "images/5.png",
  },
  {
    name: "Martell",
    img: "images/6.png",
  }
  
];

cardarray.sort(() => 0.5 - Math.random());
generateboard()

function generateboard() {
    for (let i = 0; i < cardarray.length; i++)
    {
        const card = document.createElement("img")
        card.setAttribute("src", "images/search2.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click",flipcard)
        griddisp.appendChild(card)
        
    }
    console.log(cardarray)
}

cardChosen = []
cardChosenId=[]

function flipcard() {
    const cardId = this.getAttribute("data-id")
    this.setAttribute("src", cardarray[cardId].img)
    cardChosenId.push(cardId)
    cardChosen.push(cardarray[cardId].name)

    if (cardChosen.length == 2)
    {
        setTimeout(checkmatch, 500)
        
    }

}

cardsWon=[]

function checkmatch() {
    const cards = document.querySelectorAll("img")
    

    if (cardChosen[0] == cardChosen[1])
    {
         
        cards[cardChosenId[0]].setAttribute("src","images/matched.png")
        cards[cardChosenId[1]].setAttribute("src", "images/matched.png")
      cards[cardChosenId[1]].removeEventListener("click", flipcard)
      cardsWon.push(cardChosen)
      result.innerHTML=cardsWon.length  
  }
    else {
      cards[cardChosenId[0]].setAttribute("src","images/search2.png")
      cards[cardChosenId[1]].setAttribute("src","images/search2.png")
  }



  cardChosen = []
  cardChosenId = []

  if (cardsWon.length == cardarray.length / 2)
  {
    result.innerHTML = "Congrats! Welcome to the world of Westeros"
    result.className="result1"
    resultdisp.innerHTML=null
    
  }



  
}

