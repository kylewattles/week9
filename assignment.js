

//create a class for card which holds all the traits a playing card would have
class Card {
    constructor(suit, value, rank) {
        this.suit = suit
        this.value = value
        this.rank = rank
    }
} 
//created a class for a Deck that takes 2 arrays (ranks and suits) and combines them 
class Deck {
    constructor() {
       this.deck = [];
       this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]; 
       this.suits = ["♥", "♦", "♣", "♠"];

        }
        //iterates through the suits and ranks array 
    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
          for (let j = 0; j < this.ranks.length; j++) {

            //defines a value to a card
            let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}`,
                value: j + 1
            }
            
            //pushes the card to the empty deck array
            this.deck.push(card) 
             
            }
        }
    }

    //uses fisher-yates method to shuffle the deck array to randomize it
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }    
    }
}

//class for war game

//takes 2 parameters (player1 and player 2) which contains the name score and hand
class Wargame {
    constructor() {
    this.player1 = {
        name: "Player 1", 
        score: 0, 
        hand: []
        }
    this.player2 = {
         name: "Player 2", 
         score: 0, 
         hand: [] 
        }  
    }

    playGame() {
        const deck = new Deck
        deck.createDeck()
        deck.shuffle()
        
        while (deck.deck.length !== 0) {
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }

        //runs the game logic
        for (let i = 0; i < this.player1.hand.length; i++) {
            //logic for points
           if (this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.score ++
            //
            //prints winner
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `); 
           } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player2.score ++
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `); 
           } else {
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie: no points for anybody!
                Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `); 
           }
        }
     if (this.player1.score > this.player2.score) {
        console.log(`Player 1 wins! 
            Final score: p1: ${this.player1.score}
                         p2: ${this.player2.score}`)
        } else if (this.player2.score > this.player1.score) {
            console.log(`Player 2 wins! 
            Final score: p1: ${this.player1.score}
                         p2: ${this.player2.score}`) 
            } else {
                console.log("Tie");
                
            }
        }  
    }


const game = new Wargame
game.playGame()


//calling functions
//const deck = new Deck()
//deck.createDeck()
//deck.shuffle()
//console.log(deck.deck);
