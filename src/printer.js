
  let printer = function() {
     header = "date || credit || debit || balance";
  };

  printer.prototype.printStatement = function (testHistory) {
    copiedHistory = testHistory;
    copiedHistory.reverse().unshift(header);
    printHistory(copiedHistory.join("\n"));
  };

  function printHistory(testHistory) {
    console.log(testHistory);
  }
  exports.printer = new printer();
  exports.testPrinter = printer;
