
  const dateFormat = require('dateformat');
  let formatter = require('./formatter.js');
  formatter = formatter.formatter;

  let transaction = function() {
    date = dateFormat(new Date(), "dd/mm/yyyy");
  };

  transaction.prototype.process = function(balance, transaction, type) {
    return (formatter.format(date, type, Number(transaction).toFixed(2), Number(balance).toFixed(2))); 
  };

  exports.testTransaction = transaction;
  exports.transaction = new transaction();
