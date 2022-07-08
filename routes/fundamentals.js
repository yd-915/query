var express = require('express');
var router = express.Router();
var basic = require('../data/basic');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(basic);
});

module.exports = router;
