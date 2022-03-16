const express = require('express');
const app = express();

const postsRoutes = require('./routes/postsController');

const cors = require('cors');

app.use(cors());
app.use('/api', postsRoutes);

 

module.exports = app