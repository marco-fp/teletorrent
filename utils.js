// Extender para abarcar también enlaces magnet
module.exports = {
  matchesTorrent: function (type){
    if(type === 'application/x-bittorrent'){
      return true;
    } else {
      return false;
    }
  },

  menuSelector: function(message){
    switch (message) {
      case 'start-client':
      break;
      // Starts torrent-client

      case 'stop-client':
      // Stops/Kills torrent-client
      break;

      case 'pause-client':
      // Pauses all torrents
      break;

      case 'resume-client':
      // Resumes all torrents
      break;

      case 'status':
      // Displays client status
      break;
      default:
        // Unknown command
    }

    if(message.substring(0,5) == 'start'){
      // Start downloading torrent
    } else if(message.substring(0,4) == 'stop'){
      // Stop downloading torrent
    } else if(message.substring(0,5) == 'pause'){
      // Pause downloading torrent
    } else if(message.substring(0,6) == 'resume'){
      // Resume downloading torrent
    }

  }
};
