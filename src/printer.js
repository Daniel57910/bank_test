
  let printer = function() {
     header = "date || credit || debit || balance";
  };

  printer.prototype.printStatement = function (history) {
    history.reverse().unshift(header);
    printHistory(history);
  };

  function printHistory(history) {
    console.log(history.join("\n"));
  }
  exports.printer = new printer();
  exports.testPrinter = printer;
