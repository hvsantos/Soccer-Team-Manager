const express = require('express');

const app = express();

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;

// app.use(express.json());

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

// app.get('/q', (req, res) => res.status(200).json({ message: req.query.name }));

// URL search: localhost:3001/search/5/Ronaldo
// app.get('/search/:id/:name', (req, res) => res.status(200).json({
//     message: `id ${req.params.id} e nome ${req.params.name}`,
// }));

// Body object: {
//   "name": "Ronaldo",
//   "profession": "Football player"
// }
// app.get('/test', (req, res) => {
//     console.log(req.body.name);
//     console.log(req.body.profession);
//     return res.status(200).json({ message: req.body });
// });