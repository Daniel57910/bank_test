(function(exports) {

  let printer = function() {};

  printer.prototype.printStatement = function(history) {
    header = "date || credit || debit || balance";
    printHistory(header, history);
  };

  function printHistory(header, history) {
    console.log(header);
    for (i = history.length - 1; i >= 0; i--) {
      console.log(history[i]);
    }
  }
  exports.printer = new printer();
  exports.testPrinter = printer;

})(this);