(function(exports) {

  let printer = function() {};

  printer.prototype.printStatement = function(history) {
    header = "date || credit || debit || balance";
  };

  function printHistory(history) {
    for (i = history.length - 1; i >= 0; i--) {
      console.log(history[i]);
    }
  }
  exports.printer = new printer();

})(this);