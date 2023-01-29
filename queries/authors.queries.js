const authors_queries = {
    getAuthors: `
    SELECT *
    FROM authors;`,
    getByEmail:`
    SELECT * 
    FROM authors AS a
    WHERE a.email = $1;`,
    createAuthor:`
    INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4);`,
    updateAuthor:`
    UPDATE authors
    SET name = $1, surname = $2, email = $3, image = $4
    WHERE id_author = $5;`,
    deleteAuthor:`
    DELETE 
    FROM authors
    WHERE email = $1;`,
    deleteAllAuthors:`
    DROP TABLE authors;`
}

module.exports = authors_queries;