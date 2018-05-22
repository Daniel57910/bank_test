const printer = require("../src/printer.js");
const assert = require("assert");
const account = require("../src/account.js");

describe("Printer", function() {

  beforeEach(function() {
    testAccount = new account.bankAccount();
    testPrinter = printer.printer;
  });

  describe("The Header", function() {
    it("has a header that is standardized and displayed before all print statements", function() {
      assert.equal(testPrinter.header, "date || credit || debit || balance");
    });

    it("prints the transactions in reverse chronological order", function() {
      testAccount.deposit(100);
      testAccount.withdraw(50);
      testAccount.deposit(1000);
      testAccount.withdraw(500);
      testAccount.printTransactions();
      assert.equal(printer.statement.length, 4);

    });
  });

});
