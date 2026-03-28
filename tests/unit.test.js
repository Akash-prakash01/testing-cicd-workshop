const { calculator } = require('../app');


describe('Calculator Unit Tests', () => {

    describe('Addition', () => {

        test('should add two positive numbers', () => {

            expect(calculator.add(2, 3)).toBe(5);

        });


        test('should add negative numbers', () => {

            expect(calculator.add(-2, -3)).toBe(-5);

        });

    });


    describe('Subtraction', () => {

        test('should subtract two numbers', () => {

            expect(calculator.subtract(5, 3)).toBe(2);

        });

    });


    describe('Multiplication', () => {

        test('should multiply two numbers', () => {

            expect(calculator.multiply(3, 4)).toBe(12);

        });

    });


    describe('Division', () => {

        test('should divide two numbers', () => {

            expect(calculator.divide(10, 2)).toBe(5);

        });


        test('should return null for division by zero', () => {

            expect(calculator.divide(10, 0)).toBe(null);

        });

    });

});