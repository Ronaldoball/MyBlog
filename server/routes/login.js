var express = require("express");
var router = express.Router();
var api = require("../lib/api");

router.post("/", function(req, res, next) {
  // 获取参数
  var query = req.body;
  console.log("post请求：参数", query);

  var user = {
    username: query.username,
    password: query.password
  };
  console.log(user.username);

  api.find({ username: user.username }).then(result => {
    if (result.length !== 0) {
      if (result[0].password === user.password) {
        res.json({
          result: "success"
        });
      } else {
        res.json({
          result: "passwordError"
        });
      }
    } else {
      res.json({
        result: "userNotExist"
      });
    }
  });
});

module.exports = router;
