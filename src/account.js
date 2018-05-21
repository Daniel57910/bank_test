(function(exports) {

  let transaction = require('./transaction.js');
  
  let bankAccount = function() {
    this.totalMoney = 0;
    this.history = [];
  };

  bankAccount.prototype.deposit = function(money) {
    this.totalMoney += money;
    transaction.code.deposit(this.totalMoney, money);
  };

  bankAccount.prototype.withdraw = function(money) {
    this.totalMoney -= money;
    console.log(this.totalMoney);
  };

  exports.bankAccount = bankAccount;

})(this);