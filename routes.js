const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Rotta per ottenere tutti gli utenti
router.get('/users', userController.getUsers);

// Rotta per aggiungere un nuovo utente
router.post('/users', userController.createUser);

module.exports = router;