const db = require('../db');

// Funzione per ottenere tutti gli utenti
exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Funzione per creare un nuovo utente
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, email });
  });
};
