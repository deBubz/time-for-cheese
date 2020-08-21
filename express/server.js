const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// env
require('dotenv').config();

// express
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// serving static files
app.use(express.static(path.resolve(__dirname, '../react', 'build')));

// api imports -------------------------------------------
const sample = require('./routes/sample');

app.use('/api/v1/sample', sample);
// -------------------------------------------------------

// default redirect to index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react', 'build', 'index.html'))
})

// start express server
app.listen(PORT, () => {
    console.log(`server starting on port: ${PORT}`);
})
