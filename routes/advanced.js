var express = require('express');
var router = express.Router();
var advanced = require('../data/advan');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(advanced);
});

module.exports = router;
