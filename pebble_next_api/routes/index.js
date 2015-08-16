var express = require('express');
var router = express.Router();

router.post('/nest_update', function(req, res, next) {
  console.log("Nest is currently updating...");
  console.log("\nREQUEST:\n");
  console.log(JSON.stringify(req.body));
});

module.exports = router;
