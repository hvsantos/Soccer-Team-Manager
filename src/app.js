const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/q', (req, res) => res.status(200).json({ message: req.query.name }));
app.get('/search/:id/:name', (req, res) => res.status(200).json({
    message: `id ${req.params.id} e nome ${req.params.name}`,
}));

module.exports = app;