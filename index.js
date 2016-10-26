var utils = require('./utils');
var TelegramBot = require('node-telegram-bot-api');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', function(error) {
    if (error) {
        console.log("Error connecting to database.");
    } else {
        console.log("Successfully connected to database.");
    }
});

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
  processMessage(msg, this);
});

processMessage = function(msg, bot) {
    if(typeof(msg.document) !== 'undefined'){
      utils.processDocument(msg, bot);
    } else {
      utils.menuSelector(msg.text, function(res){
        bot.sendMessage(msg.chat.id, res);
      });
    }
}
