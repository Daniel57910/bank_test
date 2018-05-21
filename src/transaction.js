(function(exports) {
  const dateFormat = require('dateformat');

  let transaction = function() {
    this.date = dateFormat(new Date(), "dd/mm/yyyy");
  };

  transaction.prototype.process = function(current, transaction, type) {
    this.current = current;
    this.transaction = transaction;
    this.type = type;
  };

  exports.code = new transaction();

})(this);