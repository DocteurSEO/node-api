const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const postsRoutes = require('./routes/postsController');

const cors = require('cors');

app.use(cors());
app.use('/api', postsRoutes);

 

module.exports = app