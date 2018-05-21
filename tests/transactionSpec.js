const assert = require('assert');
let transaction = require('../src/transaction.js');
const accounts = require('../src/account.js');

describe('Transaction', function() {
   beforeEach(function () {
     account = new accounts.bankAccount();
   });

   it("prints the current date of the transaction", function () {
     account.deposit(100);
     assert.equal(transaction.code.date, "21/05/2018");
   });

  describe('withdrawing money', function() {
    it ('returns the deposited/ money as an argument', function() {
      account.deposit(100);
      assert.equal(transaction.code.current, 100);
    });

    it('stores the type of transaction in string format', function() {
      account.deposit(100);
      assert.equal(transaction.code.type, "deposit");
    });

  });

  describe('withdrawing money', function() {
    it('confirms that a withdrawal has occured in string format', function() {
      account.deposit(80);
      account.withdraw(50);
      assert.equal(transaction.code.type, "withdraw");

    });

  });
});