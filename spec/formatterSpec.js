let formatter = require('../src/formatter.js');
const expect = require('chai').expect;

describe('Formatter', function () {
  beforeEach(function() {
    testFormatter = new formatter.testFormatter();
  });

  describe("Deposit", function() {
    it("returns the deposit in the correct format via string interpolation", function() {
      expect(testFormatter.format("21/05/2018", "deposit", 100, 500)).to.equal("21/05/2018 || 100 || || 500");
    });
  });

  describe("Withdraw", function() {
    it("returns the withdrawal in the correct format via string interpolation", function() {
      expect(testFormatter.format("21/05/2018", "withdraw", 100, 500)).to.equal("21/05/2018 || || 100 || 500");
    });
  });
});


