(function(exports) {

  let formatter = function() {
    this.formatted = null;
  };

  formatter.prototype.format = function (date, type, transaction, balance) {
    if (type === "deposit") {
      this.formatted = date + " || " + transaction  + " || || " + balance;
    }
    else {
      this.formatted = date + " || || " + transaction + " || " + balance;
    }
  };

  exports.formatter = formatter;
  
})(this);