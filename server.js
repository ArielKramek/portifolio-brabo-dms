const express = require('express');
const app = express();
const db = require('./views/database/db.js');

// Configura o Express para usar o EJS
app.set('view engine', 'ejs');

// Rota principal
app.get('/', (req, res) => {
    res.render('portfolio', { dados: db });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor a rodar em http://localhost:3000');
});