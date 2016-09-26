var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.onText(/\/start/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hi, I'm TeleTorrent. \nI'm here to help you download highly legal multimedia content from the information superhighway.");
});
