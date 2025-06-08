/**src/models/item.js — Modelo do MongoDB para os itens
Aqui definimos o modelo de dados para os "items". Usamos o mongoose para criar um esquema que representa a estrutura dos dados no banco, com os campos: 
name (obrigatório), description (opcional) e createdAt 
(data criada automaticamente). */

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);

