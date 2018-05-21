const assert = require('assert');
const formatter = require('../src/formatter.js');

describe('Formatter', function () {
  beforeEach(function() {
    format = new formatter.formatter();
  });
  describe("Deposit", function() {
    it("returns the deposit in the correct format via string interpolation", function() {
      format.format("21/05/2018", "deposit", 100, 500);
      assert.equal(format.formatted, "21/05/2018 || 100 || || 500");
    });
  });

  describe("Withdraw", function() {
    it("returns the withdrawal in the correct format via string interpolation", function() {
      format.format("21/05/2018", "withdraw", 100, 500);
      assert.equal(format.formatted, "21/05/2018 || || 100 || 500");
    });
  });
});


