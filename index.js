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

var Download = require('./models/download');

var bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

var opts = {
  reply_markup: JSON.stringify(
    {
      force_reply: true
    }
)};

bot.onText(/\/start/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hi, I'm TeleTorrent. \nI'm here to help you download highly legal multimedia content from the information superhighway.");
});

bot.on('message', function(msg){
  console.log(msg);
  processMessage(msg);
});

processMessage = function(msg) {
    var chatId = msg.chat.id;
    if(typeof(msg.document) !== 'undefined'){
      var fileId = msg.document.file_id;
      var mimeType = msg.document.mime_type;

      var fileName = msg.document.file_name;
      var fileSize = msg.document.file_size;

      if(utils.matchesTorrent(mimeType)){
        bot.sendMessage(chatId, "Just received "+msg.document.file_name+". Should I start downloading it?", opts).then( function(sended) {
          var chatId = sended.chat.id;
          var messageId = sended.message_id;
          bot.onReplyToMessage(chatId, messageId, function (message) {
            if(message.text === 'yes' || message.text === 'Yes'){
              bot.downloadFile(fileId, "tmp");

              var fileAddedAt = message.date;

              var download = new Download();
              download.fileName = fileName;
              download.fileSize = fileSize;
              download.addedAt = fileAddedAt;

              download.save(function(error) {
                if (error) {
                  bot.sendMessage(chatId, "An error occurred while proccessing the torrent.");
                } else {
                  bot.sendMessage(chatId, "Torrent saved, starting download.");
                }
              });


            } else {
              bot.sendMessage(chatId, "Unknown answer, sorry.");
            }
          });
        });
      } else {
        bot.sendMessage(chatId, "File: \""+msg.document.file_name+"\" is not a torrent file or a magnet link.");
      }
    }

}
