
  let printer = function() {
     header = "date || credit || debit || balance";
  };

  printer.prototype.printStatement = function (history) {
    history.reverse().unshift(header);
    printHistory(history.join("\n"));
  };

  function printHistory(testHistory) {
    console.log(testHistory);
  }
  exports.printer = new printer();
  exports.testPrinter = printer;
