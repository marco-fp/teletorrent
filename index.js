var utils = require('./utils')
var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.onText(/\/start/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hi, I'm TeleTorrent. \nI'm here to help you download highly legal multimedia content from the information superhighway.");
});

bot.on('message', function(msg){
  var chatId = msg.chat.id;
  if(typeof(msg.document) !== 'undefined'){
    var fileId = msg.document.file_id;
    var mimeType = msg.document.mime_type;
    if(utils.matchesTorrent(mimeType)){
      bot.downloadFile(fileId, "tmp");
      bot.sendMessage(chatId, "Just received "+msg.document.file_name+". Should I start downloading it?");
    } else {
      bot.sendMessage(chatId, "File: \""+msg.document.file_name+"\" is not a torrent file or a magnet link.");
    }
  } else {
    bot.sendMessage(chatId, "Waiting for a torrent or a magnet link.");
  }
});
