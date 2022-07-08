var express = require('express');
var router = express.Router();
var clear = require('../data/nothing');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(clear);
});

module.exports = router;
