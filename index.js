var utils = require('./utils');
var TelegramBot = require('node-telegram-bot-api');

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');

var db_url = 'mongodb://localhost/testdb';


var db_user = process.env.DB_USER || null;
var db_password = process.env.DB_PASSWORD || null;

if(db_user && db_password && process.env.NODE_ENV == 'production'){
  db_url = 'mongodb://'+ db_user + ':' + db_password + '@ds147497.mlab.com:47497/teletorrent-db';
}

mongoose.connect(db_url, {user: db_user, password: db_password}, function(error) {
    if (error) {
        console.log("Error connecting to database.");
    } else {
        console.log("Successfully connected to database.");
        startBot();
    }

});

function startBot(){

  var bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

  bot.onText(/\/start/, function (msg) {
    utils.answerStart(msg, function(res){
      bot.sendMessage(msg.chat.id, res);
    });
  });
  bot.onText(/\/help/, function (msg) {
    utils.answerHelp(msg, function(res){
      bot.sendMessage(msg.chat.id, res);
    });
  });

  bot.on('message', function(msg){
    console.log(msg);
    processMessage(msg, this);
  });

  processMessage = function(msg, bot) {
      if(typeof(msg.document) !== 'undefined'){
        utils.processDocument(msg, bot);
      } else {
        utils.menuSelector(msg.text, function(res){
          if(res){
            bot.sendMessage(msg.chat.id, res);
          } else {
              bot.sendMessage(msg.chat.id, "Error.");
            }
        });
      }
  }
  
};
