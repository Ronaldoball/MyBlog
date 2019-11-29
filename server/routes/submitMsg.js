var express = require("express");
var router = express.Router();
var api = require("../lib/api");
var apiBlogs = require("../lib/apiBlogs");

router.post("/", function(req, res, next) {
  // 获取参数
  var query = req.body;
  console.log("post请求：参数", query);

  if ("" === query.blogId) {
    var blogId = require("node-uuid").v4();
    var time = new Date().toGMTString();
    var data = {
      username: query.username,
      userId: query.userId,
      blogId: blogId,
      time: time,
      title: query.title,
      msg: query.msg
    };
    console.log(data);
    apiBlogs.save(data).then(result => {
      if (result) {
        res.json({
          result: "success"
        });
      } else {
        res.json({
          result: "failed"
        });
      }
    });
  }
});

module.exports = router;
