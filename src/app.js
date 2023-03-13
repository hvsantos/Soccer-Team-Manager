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

app.put('/teams', (req, res) => {
    const { id, name, initials } = req.body;

    const teamToEdit = teams.find(({ id: teamId }) => teamId === Number(id));

    if (!teamToEdit) {
        return res.status(404).json({ message: 'Time não encontrado' });
    }

    teamToEdit.name = name;
    teamToEdit.initials = initials;

    return res.status(200).json({ teams });
});

app.put('/teams/:id', (req, res) => {
    const { id } = req.params;

    const teamToEdit = teams.find(({ id: teamId }) => teamId === Number(id));

    if (!teamToEdit) {
        return res.status(404).json({ message: 'Time não encontrado' });
    }

    const { name, initials } = req.body;
    
    teamToEdit.name = name;
    teamToEdit.initials = initials;

    return res.status(200).json({ teams });
});

module.exports = app;

// app.get('/teams', (req, res) => res.status(200).json({ teams }));

// Body usado: 
// {
//     "id": 3,
//     "name": "América Futebol Clube",
//     "initials": "AME"
// }

// app.post('/teams', (req, res) => {
//     const newObj = { ...req.body };

//     teams.push(newObj);

//     console.log(teams);

//     return res.status(201).json({ team: newObj });
// });

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