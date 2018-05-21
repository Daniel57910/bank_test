const assert = require('assert');
let bankAccount = require('../src/account.js');

describe('Test', function() {
  it('will test that the framework is setup', function() {
    assert.equal(5, 5);
  });
});

describe('Bank Account', function() {
  beforeEach(function() {
    bankAccount = new bankAccount.bankAccount();
  });

  describe("Bank Account on Initialization of App", function() {
    it('should have the totalMoney set to 0 on initialization', function() {
      assert.equal(bankAccount.totalMoney, 0);
    });
  });

});