const express = require('express');
const router = express.Router();

// Example CRUD operations

// Get all items
router.get('/items', (req, res) => {
    // Logic to retrieve all items from the database
    res.send('Retrieve all items');
});

// Get a single item by ID
router.get('/items/:id', (req, res) => {
    const id = req.params.id;
    // Logic to retrieve an item by ID from the database
    res.send(`Retrieve item with ID: ${id}`);
});

// Create a new item
router.post('/items', (req, res) => {
    const newItem = req.body;
    // Logic to create a new item in the database
    res.send('Create a new item');
});

// Update an item by ID
router.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    // Logic to update an item in the database
    res.send(`Update item with ID: ${id}`);
});

// Delete an item by ID
router.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    // Logic to delete an item from the database
    res.send(`Delete item with ID: ${id}`);
});

module.exports = router;