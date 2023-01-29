const express = require('express');
const entriesApiController = require("../controllers/entriesControllers.js");
const entriesApiRoutes = express.Router();

entriesApiRoutes.post('/', entriesApiController.createEntry);
entriesApiRoutes.get('/', entriesApiController.getEntries);
entriesApiRoutes.put('/', entriesApiController.updateEntry);
entriesApiRoutes.delete('/', entriesApiController.deleteEntry);
entriesApiRoutes.delete('/all', entriesApiController.deleteAllEntries);

module.exports = entriesApiRoutes;