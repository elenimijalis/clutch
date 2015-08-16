var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/nest_update', function(req, res, next) {
  console.log("Nest is currently updating...");
});

module.exports = router;
