(function (exports) {

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
    transactionHandler.transaction.process(balance, money, "deposit");
    history.push(transactionHandler.transaction.formatter.formatted);
    return balance;
  };

  bankAccount.prototype.withdraw = function (money) {
    isValidWithdrawal(balance, money);
    balance -= money;
    transactionHandler.transaction.process(balance, money, "withdraw");
    history.push(transactionHandler.transaction.formatter.formatted);
    return balance;
  };

  bankAccount.prototype.printTransactions = function() {
    printBankStatement(history);
  };

  function printBankStatement(history) {
    printer.printStatement(history);
  }

  function isValidWithdrawal(currentBalance, withdraw) {
     if (currentBalance - withdraw < 0) {
       throw ("Illegitimate transaction. maximum withdrawal is " + currentBalance);
     }
  }

  exports.bankAccount = bankAccount;


})(this);

function deposit(amount) {
   money += addMoney(amount);
}

function addMoney(money) {
    return money;
}