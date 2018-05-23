const bankAccounts = require('../src/account.js');

describe('Bank Account', function() {
  
  beforeEach(function() {
    bankAccount = new bankAccounts.testBankAccount();
  });

  describe("Bank Account on Initialization of App", function() {
    it('should have the totalMoney set to 0 on initialization', function() {
      expect(bankAccount.balance()).toEqual(0);
    });
  });

  describe("Depositing Money into The Bank Account", function () {
    it('should increase the total money in the account by the amount depsited', function () {
      bankAccount.deposit(100);
      expect(bankAccount.balance()).toEqual(100);
    });
  });

  describe("Withdrawing money from the bank account", function() {
     it('should decrement the balance according to the transactions', function () {
        bankAccount.deposit(100);
        bankAccount.withdraw(50);
        expect(bankAccount.balance()).toEqual(50);
     });

     it("should raise an error method if balance - transaction < 0", function() {
        bankAccount.deposit(100);
        expect(() => bankAccount.withdraw(200)).toThrow("Illegitimate transaction. maximum withdrawal is 100");
     });
  });

});



