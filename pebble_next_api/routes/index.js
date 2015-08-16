var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/nest_update', function(req, res, next) {
  console.log("Nest is currently updating...");
  request({
    method: "PUT", 
    url: "https://developer-api.nest.com/devices/thermostats/wbEQifUE9PfijiJ2mBfW7bfjfUcO-J0l?auth=c.AbFNpVV3PvzztntF6ttP7kEMDOe56XM6uiFh2ZO2XEqjeCrXwzzczdldQzhX6yAGMyw7tYA8nfqgRuLr03WlwlXFVPKmccTX1rA7e3A2i06HFSdbD6cIWf8EUobHMHHygbtTVyDS0PSYlR4L",
    body: {"target_temperature_f": 65},
    json: true
  }, function(err, res, body) {
    if (res) { console.log("Received a response from Nest"); }
    if (err) { console.log("--- ERROR --- from Nest"); }
    if (body) { console.log("Received a body from Nest"); }
  });
  console.log("Nest has been updated...");
  res.end();
});

module.exports = router;
