(function(exports) {
  const dateFormat = require('dateformat');
  const formatter = require('./formatter.js');

  let transaction = function() {
    this.date = dateFormat(new Date(), "dd/mm/yyyy");
    this.formatter = new formatter.formatter();
    this.lastTransaction = null;
  };

  transaction.prototype.process = function(balance, transaction, type) {
    this.lastTransaction = this.formatter.format(this.date, type, transaction, balance); 
  };

  exports.code = new transaction();

})(this);