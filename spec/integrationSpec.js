const account = require("../src/account.js");
const transaction = require("../src/transaction.js");
testTransaction = new transaction.testTransaction();
console.log(testTransaction);

describe("Testing Integrations", function () {
  describe("Integration Between Account and Transaction Manager", function () {
    beforeEach(function () {
      testAccount = new account.testBankAccount();
      testTransaction = new transaction.testTransaction();
    });

    describe("Ensuring transaction receives the correct arguments", function () {
      it("should call the correct transaction arguments", function () {
        testAccount.deposit(100);
        spyOn(testTransaction, 'process');
        testTransaction.process(100, 100, "deposit");
        expect(testTransaction.process).toHaveBeenCalledWith(100, 100, "deposit");
      });

    });

  });

});