require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/items');
const errorHandler = require('./middlewares/errorHandler');
const morgan = require ('morgan');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);
app.use(errorHandler);
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));

module.exports = app;
/**
 * src/app.js — Configuração principal do servidor Express e conexão com MongoDB
 * 
 * Esse arquivo é o coração do backend. Ele configura o servidor Express, conecta ao banco MongoDB usando a string do .env, 
 * ativa o CORS para permitir requisições externas, configura o JSON parser para receber dados via API e registra as rotas que criamos para manipular os dados (/api/items). 
 * Também inicia o servidor na porta definida.
 */
