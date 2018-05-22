const assert = require('assert');
let transactionHandler = require('../src/transaction.js');
const accounts = require('../src/account.js');
const dateFormat = require('dateformat');
const date = dateFormat(new Date(), "dd/mm/yyyy");

describe('Transaction', function() {
   beforeEach(function () {
     testAccount = new accounts.testBankAccount();
   });

});