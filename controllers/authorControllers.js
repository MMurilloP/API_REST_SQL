const entry = require('../models/authorsModels');

const getAuthors = async (req, res) => {
    if (req.query.email) {
        let email = req.query.email;
        let author = await entry.getByEmail(email);
        res.status(200).json(author);
    } else {
        let authors = await entry.getAuthors();
        res.status(200).json(authors);
    };
}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; 
    const response = await entry.createAuthor(newAuthor);
    res.status(201).json({
        items_created: response,
        data: newAuthor
    });
}

const updateAuthor = async (req, res) => {
    const updatedAuthor = req.body; 
    const response = await entry.updateAuthor(updatedAuthor);
    res.status(201).json({
        items_modified: response,
        data: updatedAuthor
    });
}

const deleteAuthor = async (req, res) => {
    const {email}  = req.body;
    const response = await entry.deleteAuthor(email);
    res.status(200).json({
        DELETE: email,
        data: response
    });
}

const deleteAllAuthors = async (req, res) => {
    const response = await entry.deleteAllAuthors();
    res.status(200).json({
        DELETETABLE: "success",
        data: response 
    });
}

module.exports = {
    getAuthors,
    updateAuthor,
    createAuthor,
    deleteAuthor,
    deleteAllAuthors
}