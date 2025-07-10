// src/routes/auth.routes.js
// Define as rotas públicas de login

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);

module.exports = router;