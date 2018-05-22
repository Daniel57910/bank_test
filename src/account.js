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

  bankAccount.prototype.deposit = function (money) {
    balance += money;
    manageTransaction(balance, money, "deposit");
  };

  bankAccount.prototype.withdraw = function (money) {
    isValidWithdrawal(balance, money);
    balance -= money;
    manageTransaction(balance, money, "withdrawal");
  };

  bankAccount.prototype.printTransactions = function() {
    printBankStatement(history);
  };

  function manageTransaction(balance, transaction, type) {
    history.push(transactionHandler.transaction.process(balance, transaction, type));
  }

  function printBankStatement(history) {
    printer.printStatement(history);
  }

  function isValidWithdrawal(currentBalance, withdraw) {
     if (currentBalance - withdraw < 0) {
       throw ("Illegitimate transaction. maximum withdrawal is " + currentBalance);
     }
  }

  exports.testBankAccount = bankAccount;
  exports.bankAccount = new bankAccount();

