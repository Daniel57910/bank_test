const assert = require('assert');
const sinon = require('sinon');
const expect = require('chai').expect;
const printer = require('../src/printer.js');
console.log(printer);

describe('Printer', function() {
  beforeEach(function() {
    testPrinter = new printer.testPrinter();
  });

});