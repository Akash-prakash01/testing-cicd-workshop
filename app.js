const express = require('express');

const app = express();

app.use(express.json());

// Simple calculator functions
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : null)
};

// Routes

// Health / root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Calculator API is running!' });
});

// Calculator endpoint
app.post('/calculate', (req, res) => {
    const { operation, a, b } = req.body;

    // Validate input
    if (!operation || a === undefined || b === undefined) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    let result;

    switch (operation) {
        case 'add':
            result = calculator.add(a, b);
            break;

        case 'subtract':
            result = calculator.subtract(a, b);
            break;

        case 'multiply':
            result = calculator.multiply(a, b);
            break;

        case 'divide':
            result = calculator.divide(a, b);
            if (result === null) {
                return res.status(400).json({ error: 'Division by zero' });
            }
            break;

        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    return res.json({ result });
});

// Export app and calculator ONLY (no server here)
module.exports = { app, calculator };