// Carrega variáveis do .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

// Importa as rotas
const itemRoutes = require('./routes/items');
const authRoutes = require('./routes/auth.routes');

// Importa o middleware de erro
const errorHandler = require('./middlewares/errorHandler');

// Cria a aplicação Express
const app = express();

// Configura CORS (permite requisições de outras origens)
app.use(cors());

// Permite que a API leia JSON no body das requisições
app.use(express.json());

// Mostra logs no console durante as requisições (ex: GET /api/items 200 5ms)
app.use(morgan('dev'));

// ----------------- ROTAS --------------------

// Rota pública para login (ex: POST /auth/login)
app.use('/auth', authRoutes);

// Rotas de itens protegidas
app.use('/api/items', itemRoutes);

// --------------------------------------------

// Middleware que trata erros de forma global
app.use(errorHandler);

// Define a porta do servidor
const PORT = process.env.PORT || 5000;

// Conecta ao MongoDB usando as configurações do .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));

// Exporta o app (para testes ou outros usos)
module.exports = app;

/**
 * -------------------------------------------
 * EXPLICAÇÃO GERAL:
 * 
 * Este arquivo configura o servidor Express, conectando-se ao MongoDB e definindo as rotas da API.
 * As rotas /auth são públicas (login, futuramente cadastro).
 * As rotas /api/items são protegidas por autenticação JWT (iremos configurar isso no próximo passo).
 * 
 * Também registra middlewares úteis como cors, express.json, morgan (logs) e um tratamento global de erros.
 * -------------------------------------------
 */
