(function(exports) {
  
  let bankAccount = function() {
    this.totalMoney = 0;
    this.history = [];
  };

  exports.bankAccount = bankAccount;

})(this);