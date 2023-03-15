const express = require('express');

const app = express();

app.use(express.json());

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

const verifyPropriety = (req, res, next) => {
  const { name, initials } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (!initials) return res.status(400).json({ message: 'O campo "initials" é obrigatório' });
  next();
};

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', verifyPropriety, (req, res) => {
  const newObj = { ...req.body };
  teams.push(newObj);
  res.status(201).json({ team: newObj });
});

app.put('/teams/:id', verifyPropriety, (req, res) => {
  const { id } = req.params;
  const teamToEdit = teams.find(({ id: teamId }) => teamId === Number(id));

  if (!teamToEdit) return res.status(404).json({ message: 'Time não encontrado' });

  const { name, initials } = req.body;
  teamToEdit.name = name;
  teamToEdit.initials = initials;

  res.status(200).json({ teams });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const teamIndex = teams.findIndex(({ id: teamId }) => teamId === Number(id));

  if (!teamIndex) return res.status(404).json({ message: 'Time não encontrado' });

  teams.splice(teamIndex, 1);

  res.status(200).end();
});

module.exports = app;

// Methods
// Body usado: 
// {
//     "id": 3,
//     "name": "América Futebol Clube",
//     "initials": "AME"
// }

// app.put('/teams', (req, res) => {
//     const { id, name, initials } = req.body;
//     const teamToEdit = teams.find(({ id: teamId }) => teamId === Number(id));

//     if (!teamToEdit) return res.status(404).json({ message: 'Time não encontrado' });

//     teamToEdit.name = name;
//     teamToEdit.initials = initials;

//     return res.status(200).json({ teams });
// });

// Testes
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
