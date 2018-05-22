const assert = require('assert');
const expect = require('chai').expect;
const bankAccounts = require('../src/account.js');
const dateFormat = require('dateformat');
const date = dateFormat(new Date(), "dd/mm/yyyy");


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

    it("Adds a successful transaction to the array", function() {
      bankAccount.deposit(100);
      assert.equal(bankAccount.history[0], date + " || 100 || || 100");
    });
  });

  describe("Withdrawing money from the bank account", function() {
    it("Allows the user to withdraw money from their bank account", function() {
      bankAccount.deposit(100);
      bankAccount.withdraw(50);
      assert.equal(bankAccount.totalMoney, 50);
    });

    it("Raises an error if the user has insufficient funds for a withdrawal", function() {
      bankAccount.deposit(100);
      expect(() => bankAccount.withdraw(200)).to.throw("Illegitemate transaction. maximum withdrawal is 100");
    });
  });

});