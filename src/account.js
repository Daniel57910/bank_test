(function(exports) {

  let transaction = require('./transaction.js');
  console.log(transaction.code.current);
  
  let bankAccount = function() {
    this.totalMoney = 0;
    this.history = [];
    this.currentDeposit = 0;
  };

  bankAccount.prototype.deposit = function(money) {
    this.totalMoney+= money;
    transaction.code.deposit(this.totalMoney);
  };

  exports.bankAccount = bankAccount;

})(this);