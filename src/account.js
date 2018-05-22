(function (exports) {

  let transactionHandler = require('./transaction.js');
  let printer = require('./printer.js');
  printer = printer.printer;

  let bankAccount = function () {
    totalMoney = 0;
    history = [];
  };

  bankAccount.prototype.deposit = function (money) {
    totalMoney += money;
    transactionHandler.transaction.process(totalMoney, money, "deposit");
    history.push(transactionHandler.transaction.formatter.formatted);
    return totalMoney;
  };

  bankAccount.prototype.withdraw = function (money) {
    isValidWithdrawal(totalMoney, money);
    totalMoney -= money;
    transactionHandler.transaction.process(totalMoney, money, "withdraw");
    history.push(transactionHandler.transaction.formatter.formatted);
    return totalMoney;
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