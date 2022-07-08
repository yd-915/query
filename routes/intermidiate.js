var express = require('express');
var router = express.Router();
var cases = require('../data/inter');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(cases);
});

module.exports = router;
