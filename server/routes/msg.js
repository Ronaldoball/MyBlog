var express = require("express");
var router = express.Router();
var api = require("../lib/api");
var apiBlogs = require("../lib/apiBlogs");

router.post("/", function(req, res, next) {
  // 获取参数
  var query = req.body;
  console.log("post请求：参数", query);

  var user = {
    username: query.username
  };
  var userId = "";

  api
    .find({ username: user.username })
    .then(result => {
      //console.log(result);
      if (result.length > 0) {
        userId = result[0].userId;
        return apiBlogs.find({ userId: userId });
      }
    })
    .then(result => {
      console.log(result);
      var retData = {
        userId: userId,
        result: result
      }
      res.json(retData);
    });
});

module.exports = router;
