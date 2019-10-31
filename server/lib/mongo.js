// var mongoose = require("mongoose");

// var db = mongoose.connect('mongodb://localhost:27017/myblog');

// module.exports = db

var mongoose = require("mongoose"),
  DB_URL = "mongodb://localhost:27017/myblog"; /** * 连接 */

mongoose.connect(DB_URL, {useNewUrlParser:true , useUnifiedTopology: true}); /** * 连接成功 */

mongoose.connection.on("connected", function() {
  console.log("Mongoose connection open to " + DB_URL);
}); /** * 连接异常 */

mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
}); /** * 连接断开 */

mongoose.connection.on("disconnected", function() {
  console.log("Mongoose connection disconnected");
});

var db = mongoose;
module.exports = db;
