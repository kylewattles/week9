


class Card {
    constructor(suit, value, rank) {
        this.suit = suit
        this.value = value
        this.rank = rank
    }
} 

class Deck {
    constructor() {
       this.deck = [];
       this.ranks = ["Ace",
         "2",
         "3",
         "4",
         "5", 
         "6", 
         "7", 
         "8", 
         "9", 
         "10", 
         "Jack",
         "Queen",
         "King"
        ]; 
       this.suits = ["♥", "♦", "♣", "♠"];
}
    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
          for (let j = 0; j < this.ranks.length; j++) {
            this.deck.push({
              name: `${this.ranks[j]} of ${this.suits[i]}`,
              value: j + 1  
            }) 
            }
        }
    }

shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }    
}

deal() {
    return this.cards.pop();
    
}
}

class Player {
    constructor(name, score) {
        this.name = name
        this.score = 0
        
    }
}


class Wargame {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name
        this.player2Name = player2Name
    }
    
    play() {
        for (let i = 0; i < player1Name.newDeck.cards; i++) {
            return i
        }
    }
}   





    let newDeck = new Deck()
    newDeck.shuffle()
    
    let p1 = newDeck.cards.slice(0,26)
    let p2 = newDeck.cards.slice(26,52)
    
    for(let i = 0; i < 26; i++){
        console.log(`P1:${p1[i].value} of ${p1[i].suit}`)
        console.log(`P2:${p2[i].value} of ${p2[i].suit}`)

}

