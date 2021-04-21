const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/startup');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/try')); //need to add all routes

app.listen(proocess.env.port || 4000, function () {
    console.log('listening...');
})