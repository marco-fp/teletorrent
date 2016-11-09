var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DownloadSchema = new Schema({
  fileName: {
    type: String
  },
  fileSize: {
    type: Number
  },
  filePath: {
    type: String
  },
  addedAt: {
    type: Number // Could use date, but message dates are sent in unix time, its more convenient this way.
  }
});

module.exports = mongoose.model('Download', DownloadSchema);
