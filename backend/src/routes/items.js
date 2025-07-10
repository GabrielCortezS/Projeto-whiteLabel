const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticateToken = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação

// Criação de item (protegida por autenticação)
router.post(
  '/',
  authenticateToken, // Proteção JWT
  [
    body('name').notEmpty().withMessage('Name is required') // Validação
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  itemController.createItem
);

// Listagem de itens (protegida por autenticação)
router.get('/', authenticateToken, itemController.getItems);

// Busca por ID (protegida por autenticação)
router.get('/:id', authenticateToken, itemController.getItemById);

// Atualização (protegida por autenticação)
router.put(
  '/:id',
  authenticateToken, // Proteção JWT
  [
    body('name').notEmpty().withMessage('Name is required')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  itemController.updateItem
);

// Exclusão (protegida por autenticação)
router.delete('/:id', authenticateToken, itemController.deleteItem);

module.exports = router;
