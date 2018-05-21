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

   describe("depositing money and receiving the last transaction", function() {
     it("returns the most recent transaction that is in correct string format", function() {
      account.deposit(100);
      assert.equal(transaction.code.formatter.formatted, "21/05/2018 || 100 || || 100");
     });

   });
});