const express = require('express');
const routes = express.Router();

// Tipos de parametros
// Query Params: Parâmentros nomeados enviados na rota apos '?' (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos. 
// Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos.
routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Matheus '
    });

});


module.exports = routes;  