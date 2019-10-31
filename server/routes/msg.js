var express = require('express');
var router = express.Router();
var api = require('../lib/api')

router.post('/', function(req, res, next) {

  // 获取参数
  var query = req.body;
  console.log("post请求：参数", query);

  var user = {
        username : query.username,
        password: query.password,
        email: query.email
    };
  // api.save(user)
  //       .then(result => {
  //           console.log(result);
  //       });

  api.find({})
        .then(result => {
            console.log(result);
            res.json(result[0]);         
        })

  //res.json(retData);

  // res.send('hello , world');
});

module.exports = router;