var TelegramBot = require('node-telegram-bot-api');
var utils = require('./utils');

module.exports = {
  start: () => {
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
  }
}
