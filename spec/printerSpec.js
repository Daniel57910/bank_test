const printer = require('../src/printer.js');
console.log(printer);

describe('Printer', function () {

  beforeEach(function () {

    testTransaction = null;
    testPrinter = new printer.testPrinter();
    testHistory = [
      "23/05/2018 || || 50.00 || 350.00",
      "23/05/2018 || 200.00 || || 400.00",
      "23/05/2018 || 200.00 || || 200.00",
      "23/05/2018 || || 100.00 || 0.00",
      "23/05/2018 || 100.00 || || 100.00"
    ];

    spyOn(console, "log").and.callFake(function (transaction) {
      testTransaction = transaction;
    });

  });

  describe("printing the transactions", function () {
    it("should send all the transactions into an array to representing printing in the console", function () {
      testPrinter.printStatement(testHistory);
      expect(testTransaction).toEqual(testHistory.join("\n"));
    });
  });

});