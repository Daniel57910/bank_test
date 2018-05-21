const assert = require('assert');
const bankAccounts = require('../src/account.js');

describe('Test', function() {
  it('will test that the framework is setup', function() {
    assert.equal(5, 5);
  });
});

describe('Bank Account', function() {
  beforeEach(function() {
    bankAccount = new bankAccounts.bankAccount();
  });

  describe("Bank Account on Initialization of App", function() {
    it('should have the totalMoney set to 0 on initialization', function() {
      assert.equal(bankAccount.totalMoney, 0);
    });
    it('should have an empty history of deposits and withdrawels', function() {
      assert.equal(bankAccount.history.length, 0);
    });
  });

  describe("Depositing Money into The Bank Account", function() {
    it('Increases the total money in the account by the amount depsited', function() {
      bankAccount.deposit(100);
      assert.equal(bankAccount.totalMoney, 100);
    });
  });

  describe("Withdrawing money from the bank account", function() {
    it("Allows the user to withdraw money from their bank account", function() {
      bankAccount.deposit(100);
      bankAccount.withdraw(50);
      assert.equal(bankAccount.totalMoney, 50);
    });
  });

});