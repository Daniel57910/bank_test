  let transactionHandler = require('./transaction.js');
  let printer = require('./printer.js');
  printer = printer.printer;

  let bankAccount = function () {
    balance = 0;
    history = [];
  };

  bankAccount.prototype.balance = function() {
    return balance;
  };

  bankAccount.prototype.history = function() {
    return history;
  };

  bankAccount.prototype.deposit = function (money) {
    balance += money;
    manageTransaction(balance, money, "deposit");
  };

  bankAccount.prototype.withdraw = function (money) {
    if (isValidWithdrawal(balance, money) === true) {
      balance -= money;
      manageTransaction(balance, money, "withdrawal");
    }
  };

  bankAccount.prototype.printTransactions = function() {
    printBankStatement(history.slice(0));
  };

  function manageTransaction(balance, transaction, type) {
    history.push(transactionHandler.transaction.process(balance, transaction, type));
  }

  function printBankStatement(printedHistory) {
    printer.printStatement(printedHistory);
  }

  function isValidWithdrawal(currentBalance, withdraw) {
     if (currentBalance - withdraw < 0) {
       throw ("Illegitimate transaction. maximum withdrawal is " + currentBalance);
     }
       
     return true;

  }

  exports.testBankAccount = bankAccount;
  exports.bankAccount = new bankAccount();

