const printer = require("../src/printer.js");
const assert = require("assert");

describe("Printer", function() {

  describe("The Header", function() {
    it("has a header that is standardized and displayed before all print statements", function() {
      assert.equal(printer.printer.header, "date || credit || debit || balance");
    });
  });

});
