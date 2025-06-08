/**
 * src/middlewares/errorHandler.js — Middleware para tratamento global de erros.
 * Esse middleware captura qualquer erro não tratado e responde com status 500 (ou o código que estiver no erro).
 */

const errorHandler = (err, req, res, next)=> {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        error: err.message || 'Internal Server Error'
    });

};

module.exports = errorHandler;