module.exports = {
  start: () => {
    var app = require('express')();

      var port = process.env.PORT || 8080;

      app.listen(port,function(err){
          if(err) console.log("Server error "+ err);
          else console.log("Server listening at port "+ port);
      });

      app.get('/',function(req,res){
          res.json("Teletorrent is up!");
      });
  }
}
