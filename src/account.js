(function (exports) {

  let transaction = require('./transaction.js');

  let bankAccount = function () {
    this.totalMoney = 0;
    this.history = [];
  };

  bankAccount.prototype.deposit = function (money) {
    this.totalMoney += money;
    transaction.code.process(this.totalMoney, money, "deposit");
    this.history.push(transaction.code.formatter.formatted);
  };

  bankAccount.prototype.withdraw = function (money) {
    this.totalMoney -= money;
    transaction.code.process(this.totalMoney, money, "withdraw");
  };

  exports.bankAccount = bankAccount;

})(this);