const entry_queries = {
    getEntries: `
    SELECT e.title, e.content, e.category, 
    a.name,a.surname,a.image  
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    ORDER BY id_entry ASC;`,
    updateEntry:`
    UPDATE entries
    SET content = $1, category = $2
    WHERE title = $3;`,
    deleteEntry:`
    DELETE 
    FROM entries
    WHERE title = $1;`,
    createEntry:  
    `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    deleteAllEntries:`
    DROP TABLE entries;`
}

module.exports = entry_queries;