var Transmission = require('transmission');
var transmission = new Transmission({
  port: 9091,
  host: '127.0.0.1',
  username: '',
  password: ''
});

var downloadDir = '../tmp';

module.exports = {
    getClientStatus: (callback) => {
        transmission.sessionStats(function(error, status) {
            return callback(error, status);
        });
    },

    addMagnet: (magnetLink, callback) => {
        transmission.addUrl(magnetLink, {
            "download-dir": downloadDir
        }, function(err, result) {
            return callback(err, result);
        });
    },

    addTorrentFile: (torrentFile, callback) => {
        transmission.addFile(torrentFile.filePath, {
            "download-dir": downloadDir
        }, function(err, result) {
            return callback(err, result);
        });
    },

    startAllTorrents: (callback) => {
      getAllIds((ids) =>{
        if(ids){
          transmission.start(ids,function(err, arg){
            if(err) callback(false)
            else callback(true)
          });
        } else {
          callback(false)
        }
      });
    },

    stopAllTorrents: (callback) => {
      getAllIds((ids) =>{
        if(ids){
          transmission.stop(ids,function(err, arg){
            if(err) callback(false)
            else callback(true)
          });
        } else {
          callback(false)
        }
      });
    }
}

function getAllIds(callback) {
  transmission.active(function(err, result) {
      if (err) {
          return callback(null);
      } else {
        var ids = []
        for (var i = 0; i < result.torrents.length; i++) {
            ids.push(result.torrents[i].id);
        }
        return callback(ids);
      }
  });
}
