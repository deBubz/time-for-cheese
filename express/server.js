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

// api imports -------------------------------------------
const sample = require('./routes/sample');

app.use('/api/v1/sample', sample);
// -------------------------------------------------------

// default redirect to index.html

// start express server
app.listen(PORT, () => {
    console.log(`server starting on port: ${PORT}`);
})
