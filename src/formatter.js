

  let formatter = function() {
  };

  formatter.prototype.format = function (date, type, transaction, balance) {
    console.log(date);
    console.log(type);
    console.log(transaction);
    console.log(balance);
    if (type === "deposit") {
      return date + " || " + transaction  + " || || " + balance;
    }
    else {
      return date + " || || " + transaction + " || " + balance;
    }
  };

  exports.testFormatter = formatter;
  exports.formatter = new formatter();
  
