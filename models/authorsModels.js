const pool = require('../utils/db_pgsql')
const authors = require('../queries/authors.queries');

const getAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authors.getAuthors);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const getByEmail = async (author) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authors.getByEmail, [author]);
        result = data.rows;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const createAuthor = async (author) => {
    const { name, surname, mail, image } = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authors.createAuthor, [name, surname, mail, image]);
        result = data.rowCount;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const updateAuthor = async (author) => {
    const { name, surname, email, image, id_author } = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authors.updateAuthor, [name, surname, email, image, id_author]);
        result = data.rowCount;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const deleteAuthor = async (entry) =>{
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authors.deleteAuthor, [entry]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const deleteAllAuthors = async () => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(authors.deleteAllAuthors);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

module.exports = {
    getAuthors,
    getByEmail,
    updateAuthor,
    createAuthor,
    deleteAuthor,
    deleteAllAuthors
}