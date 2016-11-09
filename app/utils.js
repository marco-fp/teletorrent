var Download = require('../models/download');
var torrentAPI = require('./torrentAPI.js');

module.exports = {
  matchesTorrent: function (type){
    if(type === 'application/x-bittorrent'){
      return true;
    } else {
      return false;
    }
  },

  answerStart: function(message, callback){
    if(message.text === '/start'){
      callback("Hi, I'm TeleTorrent. \nI'm here to help you download highly legal multimedia content from the information superhighway.");
    } else {
      callback('Error.');
    }
  },

  answerHelp: function(message, callback){
    if(message.text === '/help'){
      callback("Available commands: \n - start / stop / pause / resume  <torrent_id> : Actions over defined Torrent. \n - [start/stop/pause/resume]-client : Actions over remote torrent client. \n - status : Displays information about the current downloads. \n")
    } else {
      callback('Error.');
    }
  },

  menuSelector: function(message, callback){
    if(message.substring(0,5) === 'start' && message !== 'start-client'){
      callback('start');
      // Start downloading torrent
    } else if(message.substring(0,4) == 'stop' && message !== 'stop-client'){
      callback('stop');
      // Stop downloading torrent
    } else if(message.substring(0,5) == 'pause'){
      callback('pause');
      // Pause downloading torrent
    } else if(message.substring(0,6) == 'resume'){
      callback('resume');
      // Resume downloading torrent
    } else {

    switch (message) {
      case 'start-client':
        torrentAPI.startAllTorrents((result) =>{
          if(result){
            callback('All torrents started successfully.');
          } else {
            callback('Error starting all torrents.');
          }
        })
      break;
      // Starts torrent-client

      case 'stop-client':
      torrentAPI.stopAllTorrents((result) =>{
        if(result){
          callback('All torrents stopped successfully.');
        } else {
          callback('Error stopping all torrents.');
        }
      })
      break;

      case 'pause-client':
        callback('pause-client')
      // Pauses all torrents
      break;

      case 'resume-client':
        callback('resume-client')
      // Resumes all torrents
      break;

      case 'status':
        torrentAPI.getClientStatus((error, status) => {
          if(error){
            callback('Error getting client status: \n' + error);
          } else {
            callback('Status: \n' + status)
          }
        });
      break;
      default:
        callback(null)
        // Unknown command
    }
  }
  },

  processDocument: function(msg, bot){

    if(this.matchesTorrent(msg.document.mime_type)){
      bot.sendMessage(msg.chat.id, "Just received "+msg.document.file_name+". Should I start downloading it?", reply_opts).then( function(sended) {
        var chatId = sended.chat.id;
        var messageId = sended.message_id;
        bot.onReplyToMessage(chatId, messageId, function (message) {
          if(message.text === 'yes' || message.text === 'Yes'){
            var downloadResult = bot.downloadFile(msg.document.file_id, "tmp").then((result) => {

              var download = new Download();
              download.fileName = msg.document.file_name;
              download.fileSize = msg.document.file_size;
              download.filePath = result.filePath;
              download.addedAt = message.date;

              download.save(function(error) {
                if (error) {
                  bot.sendMessage(chatId, "An error occurred while proccessing the torrent.");
                } else {
                  bot.sendMessage(chatId, "Torrent saved, starting download.");
                }
              });
              torrentAPI.addTorrentFile(download);
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

};

var reply_opts = {
  reply_markup: JSON.stringify(
    {
      force_reply: true
    }
)};
