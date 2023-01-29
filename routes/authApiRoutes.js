const express = require('express');
const authorApiController = require('../controllers/authorControllers');
const authorsApiRoutes = express.Router();

authorsApiRoutes.post('/', authorApiController.createAuthor);
authorsApiRoutes.get('/', authorApiController.getAuthors);
authorsApiRoutes.put('/', authorApiController.updateAuthor);
authorsApiRoutes.delete('/', authorApiController.deleteAuthor);
authorsApiRoutes.delete('/all', authorApiController.deleteAllAuthors);

module.exports = authorsApiRoutes;