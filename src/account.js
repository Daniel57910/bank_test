(function (exports) {

  let transactionHandler = require('./transaction.js');
  let printer = require('./printer.js');
  printer = printer.printer;

  let bankAccount = function () {
    this.totalMoney = 0;
    this.history = [];
  };

  bankAccount.prototype.deposit = function (money) {
    this.totalMoney += money;
    transactionHandler.transaction.process(this.totalMoney, money, "deposit");
    this.history.push(transactionHandler.transaction.formatter.formatted);
  };

  bankAccount.prototype.withdraw = function (money) {
    isValidWithdrawal(this.totalMoney, money);
    this.totalMoney -= money;
    transactionHandler.transaction.process(this.totalMoney, money, "withdraw");
    this.history.push(transactionHandler.transaction.formatter.formatted);
  };

  bankAccount.prototype.printTransactions = function() {
    printBankStatement(this.history);
  };

  function printBankStatement(history) {
    printer.printStatement(history);
  }

  function isValidWithdrawal(currentBalance, withdraw) {
     if (currentBalance - withdraw < 0) {
       throw ("Illegitemate transaction. maximum withdrawal is " + currentBalance);
     }
  }

  exports.bankAccount = bankAccount;

})(this);