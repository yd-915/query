var express = require('express');
var router = express.Router();
var intermediate = require('../data/inter');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(intermediate);
});

module.exports = router;
