
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
    
} 

class Deck {
    constructor() {
        this.cards = [];
        const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]; 
        
        
        for (let suit of suits) {
            for (let value of values) {
            this.cards.push({ suit: suit, value: value });
            
        }
    }    
}

shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
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