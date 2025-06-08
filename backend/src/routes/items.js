const express = require('express');
const { body, validationResult } = require('express-validator'); // Se estiver usando validação
const router = express.Router();
const itemController = require('../controllers/itemController'); // Ajuste o caminho se necessário

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required')  // Validação do campo 'name'
  ],
  (req, res, next) => {
    const errors = validationResult(req);                   // Checa erros da validação
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Responde com erro 400 se inválido
    }
    next(); // Continua para o controller se válido
  },
  itemController.createItem  // Controller que cria o item
);

// Lista todos os itens (GET /)
router.get('/', itemController.getItems);

// Busca item por ID (GET /:id)
router.get('/:id', itemController.getItemById);

// Atualiza um item por ID (PUT /:id)
// Também valida que 'name' não está vazio
router.put(
  '/:id',
  [
    body('name').notEmpty().withMessage('Name is required')  // Validação do campo 'name'
  ],
  (req, res, next) => {
    const errors = validationResult(req);                   // Checa erros da validação
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Responde com erro 400 se inválido
    }
    next(); // Continua para o controller se válido
  },
  itemController.updateItem  // Controller que atualiza o item
);

// Deleta um item por ID (DELETE /:id)
router.delete('/:id', itemController.deleteItem);

module.exports =router;