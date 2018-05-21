(function(exports) {
  const dateFormat = require('dateformat');

  let transaction = function() {
    this.current = 0;
    this.date = dateFormat(new Date(), "dd/mm/yyyy");
  };

  transaction.prototype.deposit = function(current, transaction) {
    this.current = current;
    this.transaction = transaction;
  };

  exports.code = new transaction();

})(this);