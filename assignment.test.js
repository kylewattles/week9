
const assert = chai.assert

const { expect } = require('chai');
const Deck = require('./Deck'); 

describe('Deck', () => {
  describe('createDeck', () => {
    let deck;

    beforeEach(() => {
      deck = new Deck();
      deck.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      deck.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      deck.deck = [];
    });

    it('should create a deck with 52 cards', () => {
      deck.createDeck();
      expect(deck.deck).to.have.lengthOf(52);
    });
  });
});