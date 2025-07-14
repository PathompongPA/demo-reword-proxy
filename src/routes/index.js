const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define routes
router.get('/', controller.getHome);
router.get('/items', controller.getAllItems);
router.post('/items', controller.createItem);
router.get('/items/:id', controller.getItemById);
router.put('/items/:id', controller.updateItem);
router.delete('/items/:id', controller.deleteItem);

// Export the router
module.exports = router;