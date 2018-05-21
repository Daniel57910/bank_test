(function(exports) {

  let transaction = function() {
    this.current = 0;
  };

  transaction.prototype.deposit = function(money) {
    this.current = money;
  }

  exports.code = new transaction();

})(this);