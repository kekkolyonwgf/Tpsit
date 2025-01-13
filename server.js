const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importa path per gestire correttamente i percorsi
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware per parsare JSON
app.use(bodyParser.json());

// Serve i file statici dalla cartella "frontend"
app.use(express.static(path.join(__dirname, '../frontend')));

// Collega le rotte API
app.use('/api', routes);

// Gestisci la richiesta GET sulla root "/" per restituire il file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



//CREATE TABLE users (
    //id INT AUTO_INCREMENT PRIMARY KEY,
    //name VARCHAR(255) NOT NULL,
    //email VARCHAR(255) NOT NULL
 // );