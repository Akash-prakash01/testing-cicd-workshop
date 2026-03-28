const { app } = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Calculator API listening at http://localhost:${port}`);
});

module.exports = server;