/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })

  describe("question 1a: Sorted array of numbers",() => {
    it("#Should sort an array in ascending order", () => {
        let arrayOfNumbers = [1, 5, 3, 2, 4]
        arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)
        
        expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])
       })
  })

  describe("question 1b: Manage my wallet", () => {

    class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }
      
        addMoney(amount) {
          this.money += amount
        }
      
        removeMoney(amount) {
          this.money -= amount
        }
      }
      
      const myWallet = new Wallet(100)
      myWallet.removeMoney(14.99)
      myWallet.addMoney(3)


    it("#Should be able to add money to my wallet", () => {
        let myWallet = new Wallet(10)
        myWallet.addMoney(5)

        expect(myWallet.money).to.equal(15)
    })

    it("#Should be able to remove money from my wallet", () => {
        let myWallet = new Wallet(10)
        myWallet.removeMoney(5)

        expect(myWallet.money).to.equal(5)

        myWallet.removeMoney(2.5)
    })
  })

  describe("day of the week", () => {
    it("#Should print friday for the 5th day of the week", () => {
      let answer = dayOfTheWeek(5)
      expect(answer).to.equal('Friday')
    })
  }) 


  describe("wizards passing or whatever", () => {
    it("#Should filter out non wizards", () =>{
      console.log(onlyWizards(movieCharacters));
      
      expect(onlyWizards(movieCharacters)).to.have.lengthOf(2)
    })
  })
  
  
  /*--------------------------NEW TESTS BELOW-------------------------------*/
})

