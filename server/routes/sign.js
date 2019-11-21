var express = require("express");
var router = express.Router();
var api = require("../lib/api");

router.post("/", function(req, res, next) {
  // 获取参数
  var query = req.body;
  console.log("post请求：参数", query);

  var user = {
    username: query.username,
    password: query.password,
    email: query.email
  };
  console.log(user);
  api.find({ username: user.username }).then(result => {
    if (result.length > 0) {
      res.json({
        result: "isExist"
      });
    } else {
      api.save(user).then(result => {
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
});

module.exports = router;
