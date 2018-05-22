const assert = require('assert');
let transactionHandler = require('../src/transaction.js');
const accounts = require('../src/account.js');
const dateFormat = require('dateformat');
const date = dateFormat(new Date(), "dd/mm/yyyy");

describe('Transaction', function() {
   beforeEach(function () {
     account = new accounts.bankAccount();
   });

   it("prints the current date of the transaction", function () {
     account.deposit(100);
     assert.equal(transactionHandler.transaction.date, date);
   });

   describe("depositing money and receiving the last transaction", function() {
     it("returns the most recent transaction that is in correct string format", function() {
      account.deposit(100);
      assert.equal(transactionHandler.transaction.formatter.formatted, date + " || 100 || || 100");
     });

    describe("withdrawing money and receiving the last transaction", function() {
      it("returns a withdrawal transaction in the correct string format", function() {
        account.deposit(100);
        account.withdraw(50);
        assert.equal(transactionHandler.transaction.formatter.formatted, date + " || || 50 || 50");
      });
    });
   });
   
});