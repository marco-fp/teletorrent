// Extender para abarcar también enlaces magnet
module.exports = {
  matchesTorrent: function (type){
    if(type === 'application/x-bittorrent'){
      return true;
    } else {
      return false;
    }
  }
}
