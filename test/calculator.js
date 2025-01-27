const calculator = require('../app/calculator');
const chai = require('chai');
const expect = chai.expect;

describe('Calculator Tests', () => {
    describe('Addition Operation', () => {
        it('5 + 2 should equal 7', () => {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it('5 + 2 should not equal 8', () => {
            expect(calculator.add(5, 2)).to.not.equal(8);
        });
    });

    describe('Subtraction Operation', () => {
        it('5 - 2 should equal 3', () => {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it('5 - 2 should not equal 5', () => {
            expect(calculator.sub(5, 2)).to.not.equal(5);
        });
    });

    describe('Multiplication Operation', () => {
        it('5 * 2 should equal 10', () => {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it('5 * 2 should not equal 12', () => {
            expect(calculator.mul(5, 2)).to.not.equal(12);
        });
    });

    describe('Division Operation', () => {
        it('10 / 2 should equal 5', () => {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it('10 / 2 should not equal 2', () => {
            expect(calculator.div(10, 2)).to.not.equal(2);
        });
    });
}); 