require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const entriesApiRoutes = require('./routes/entriesApiRoutes');
const authorsApiRoutes = require('./routes/authApiRoutes');

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('SQL API REST');
})

app.use('/api/entries', entriesApiRoutes); 
app.use('/api/authors', authorsApiRoutes);

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});
