var dbConfig = require('./config/database.js');
var herokuListener = require('./config/heroku.js');
var tmpDir = require('./config/tmpDirHandler.js');

var teleTorrent = require('./app/teletorrent.js');

var mongoose = require('mongoose');

if(process.env.NODE_ENV == 'production'){
  console.log("-- PRODUCTION ENV --")
  console.log("Clearing tmp files...");
  tmpDir.clear();
  herokuListener.start();
}

mongoose.connect(dbConfig.url, {user: dbConfig.user, password: dbConfig.password}, function(error) {
    if (error) {
        console.log("Error connecting to database.", error);
    } else {
        console.log("Successfully connected to database.");
        teleTorrent.start();
    }
});
