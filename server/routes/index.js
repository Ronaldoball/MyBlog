var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  // res.write("qqqq");
  res.json({
  	name: "11",
  	id: "222"
  });
  //res.end();
});

module.exports = router;
