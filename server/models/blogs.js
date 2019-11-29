var mongoose = require("mongoose");
var db = require("../lib/mongo");
//一个用户模型
var BlogSchema = new mongoose.Schema({
  username: { type: String },
  userId: { type: String },
  blogId: { type: String },
  time: { type: Date, default: Date.now },
  title: {type: String},
  msg: { type: String },
});
//创建Model
var BlogModel = db.model("blog", BlogSchema);
module.exports = BlogModel;
