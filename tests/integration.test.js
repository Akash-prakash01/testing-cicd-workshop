const request = require('supertest');
const { app } = require('../app');

describe('Calculator API Integration Tests', () => {

    describe('GET /', () => {

        test('should return welcome message', async () => {
            const response = await request(app).get('/');

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Calculator API is running!');
        });

    });

    describe('POST /calculate', () => {

        test('should perform addition', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'add', a: 5, b: 3 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(8);
        });

        test('should perform subtraction', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'subtract', a: 10, b: 4 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(6);
        });

        test('should perform multiplication', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'multiply', a: 3, b: 4 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(12);
        });

        test('should perform division', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'divide', a: 10, b: 2 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(5);
        });

        test('should return error for division by zero', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'divide', a: 10, b: 0 });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Division by zero');
        });

        test('should return error for invalid operation', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'invalid', a: 5, b: 3 });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Invalid operation');
        });

        test('should return error for missing parameters', async () => {
            const response = await request(app)
                .post('/calculate')
                .send({ operation: 'add', a: 5 });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Missing required parameters');
        });

    });

});