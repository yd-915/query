var express = require('express');
var router = express.Router();
var plus = require('../data/advan');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(plus);
});

module.exports = router;
