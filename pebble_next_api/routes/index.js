var express = require('express');
var request = require('request');
var router = express.Router();

// req - request details (parameters)
// res - http response 
// next - find next router
router.get('/', function(req, res, next) {
  console.log("Getting root");
  res.render("index");
});

router.post('/', function(req, res) {
    console.log("Temperature set to (F):");
    console.log(req.body.temp);
    res.send('Temperature submitted, now you may use your pebble!');
}); 

router.post('/nest_update_temp', function(req, res, next) {
  console.log("Nest is currently updating...");
  console.log("Switching to " + req.param.move + " mode!");
  var params = req.body;
  if (params.move) { console.log(params.move); }
  var nest_url = "https://developer-api.nest.com/devices/thermostats/wbEQifUE9PfijiJ2mBfW7bfjfUcO-J0l?auth=c.AbFNpVV3PvzztntF6ttP7kEMDOe56XM6uiFh2ZO2XEqjeCrXwzzczdldQzhX6yAGMyw7tYA8nfqgRuLr03WlwlXFVPKmccTX1rA7e3A2i06HFSdbD6cIWf8EUobHMHHygbtTVyDS0PSYlR4L";
  var new_temp = req.params.temp;
  var new_temp = req.body.temp; // variable
  var temp, hvac;
  request({
    method: "GET", 
    url: nest_url,
    json: true
  }, function(err, res, body) {
    temp = body.current_temperature
    if (new_temp > temp) {
      hvac = "heat";
    } else {
      hvac = "cool";
    }
    request({
      method: "PUT", 
      url: nest_url,
      body: {"target_temperature_f": new_temp, "hvac_mode": hvac},
      json: true
    }, function(err, res, body) {
      if (res) { console.log("Received a response from Nest"); }
      if (err) { console.log("--- ERROR --- from Nest"); }
      if (body) { console.log("Received a body from Nest"); }
    });
      console.log("Nest has been updated...");
  });
  res.end();
});
    

module.exports = router;
