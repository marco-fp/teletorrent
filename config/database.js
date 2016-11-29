var db_url = 'mongodb://localhost/testdb';

var db_user = process.env.DB_USER || null;
var db_password = process.env.DB_PASSWORD || null;

if(db_user && db_password && process.env.NODE_ENV == 'production'){
  db_url = 'mongodb://'+ db_user + ':' + db_password + '@ds147497.mlab.com:47497/teletorrent-db';
}

console.log(db_url);

module.exports = {
  url: db_url,
  user: db_user,
  password: db_password
}
