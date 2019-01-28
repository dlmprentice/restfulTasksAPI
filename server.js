// require
const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

// use
app.use(bodyParser.json());

// mongoose
require('./public/server/config/mongoose.js');
mongoose.Promise = global.Promise;

// Redirect static into dist
app.use(express.static( __dirname + '/public/dist/public' ));

// setters
require('./public/server/models/restfulTaskAPI.js');

// routes
require('./public/server/config/routes.js');

// server listen
app.listen(8000, function() {
    console.log('listening on port 8000');
})

