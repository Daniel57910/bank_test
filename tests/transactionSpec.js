const assert = require('assert');
let transaction = require('../src/transaction.js');
let account = require('../src/account.js');

describe('Transaction', function() {
   before(function () {
     account = new account.bankAccount();
   });

  describe('Depositing money into the bank account', function() {
    it ('returns the deposited money as an argument', function() {
      account.deposit(100);
      assert.equal(transaction.code.current, 100);
    });

    it ("prints the current date of the transaction", function() {
      account.deposit(100);
      assert.equal(transaction.code.date, "21/05/2018");
    });
  });
});