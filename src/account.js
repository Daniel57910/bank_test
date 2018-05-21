(function(exports) {

  let transaction = require('./transaction.js');
  
  let bankAccount = function() {
    this.totalMoney = 0;
    this.history = [];
  };

  bankAccount.prototype.deposit = function(money) {
    this.totalMoney+= money;
  };

  exports.bankAccount = bankAccount;

})(this);