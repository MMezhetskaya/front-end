"use strict";

var calculate = require('./calcPermission');

var chai = require('chai');
var expect = chai.expect;


describe('Calculation on calculator test set:', function () {

    it("If the numbers and sign are entered correctly, it performs the specified operation and returns the result", function() {
        expect(calculate (1,1,"/")).to.equal(1);
    });
    it("Check the entered data. Digits and invalid operation character entered.", function() {
        expect(calculate (1,1,"а")).to.equal(null);
    });
    it("Check the entered data. Non-numeric, numeric, and a valid transaction character are entered.", function() {
        expect(calculate ("1",1,"+")).to.equal(null);
    });
    it("Check the entered data. Entered is not valid the numbers and operation sign.", function() {
        expect(calculate("1","b","+")).to.equal(null);
    });
    it("Test for correctness of calculations. Division by 0 is impossible.", function() {
        expect(calculate (1,0,"/")).to.equal(null);
    });
    it("Test for correctness of calculations. It is impossible to take the rest from division by 0.", function() {
        expect(calculate (1,0,"%")).to.equal(null);
    });
    it('Should be able to work with incorrect data - throw an error');
});

