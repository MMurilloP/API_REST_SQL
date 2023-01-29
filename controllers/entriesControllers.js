const entry = require('../models/entriesModels');

const getEntries = async (req, res) => {
    let entries = await entry.getEntries();
    res.status(200).json(entries);
}

const createEntry = async (req, res) => {
    const newEntry = req.body; 
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        items_created: response,
        data: newEntry
    });
}

const updateEntry = async (req, res) => {
    const upEntry = req.body;
    const response = await entry.updateEntry(upEntry)
    res.status(202).json({ 
        UPDATE: response,
        data: title
    });
}

const deleteEntry = async (req, res) => {
    const {title}  = req.body;
    const response = await entry.deleteEntry(title);
    res.status(200).json({
        DELETE: title,
        data: response
    });
}

const deleteAllEntries = async () => {
    const response = await entry.deleteAllEntries();
    res.status(200).json({
        DELETETABLE: "success",
        data: response
    });
}


module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry, 
    deleteAllEntries    
}