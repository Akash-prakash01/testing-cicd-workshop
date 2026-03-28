
const request = require('supertest');

const { app, server } = require('../app');


describe('Calculator API Integration Tests', () => {

    afterAll((done) => {

        server.close(done);

    });


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