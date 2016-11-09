var assert = require('chai').assert; //Assertion library
var request = require('supertest'); //To test an API rest
var mongoose = require('mongoose');
var utils = require('../app/utils');

var dummyMessage = {
    message_id: 666,
    from: {
        id: 2930431,
        first_name: 'Testingston',
        username: 'Testerino'
    },
    chat: {
        id: 2930431,
        first_name: 'Testingston',
        username: 'Testerino',
        type: 'private'
    },
    date: 1477516355,
    text: 'test_text'
}

describe("Responses", function() {

    before(function(done) { //before the first test
        mongoose.connect('mongodb://localhost/testdb', function(error) {
            done(error);
        });
      });

        it("Start command", function(done) {
          var answer = "Hi, I'm TeleTorrent. \nI'm here to help you download highly legal multimedia content from the information superhighway.";
          dummyMessage.text = '/start';
          utils.answerStart(dummyMessage, function(res){
            assert.strictEqual(res,answer);
            dummyMessage.text = '/wrong_command';
            utils.answerStart(dummyMessage, function(res){
              assert.strictEqual(res,"Error.");
            });
          });
          done();
        });

        it("Help command", function(done) {
          var answer = "Available commands: \n - start / stop / pause / resume  <torrent_id> : Actions over defined Torrent. \n - [start/stop/pause/resume]-client : Actions over remote torrent client. \n - status : Displays information about the current downloads. \n";
          dummyMessage.text = '/help';
          utils.answerHelp(dummyMessage, function(res){
            assert.strictEqual(res,answer);
            dummyMessage.text = '/wrong_command';
            utils.answerStart(dummyMessage, function(res){
              assert.strictEqual(res,"Error.");
            });
          });
          done();
        });

        it("Menu selector", function(done){
          var torrentMenuItems = ['start', 'stop', 'pause', 'resume', 'status'];
          for(var i = 0; i < torrentMenuItems.length; ++i){
            utils.menuSelector(torrentMenuItems[i], function(res){
              assert.strictEqual(res,torrentMenuItems[i]);
            });
          }

          var clientMenuItems = ['start-client', 'stop-client', 'pause-client', 'resume-client'];
          for(var i = 0; i < torrentMenuItems.length; ++i){
            utils.menuSelector(torrentMenuItems[i], function(res){
              assert.strictEqual(res,torrentMenuItems[i]);
            });
          }

          utils.menuSelector('wrong_command', function(res){
            assert.strictEqual(res, null);
          });

          done();
        });

        it('Saving torrent file', function(done){
          // Don't know how to test a running bot, will look into it.
          done();
        });
});
