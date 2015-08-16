var ajax = require('ajax');

Pebble.addEventListener('ready',
  function(e) {
    console.log('PebbleKit JS is ready.');
  }
);

Pebble.addEventListener('appmessage', function(e) {
  console.log('PebbleKit JS Ready!');
  if (e.payload.SLEEP_KEY) {
  	console.log("sleep");
  	ajax({
  		url: 'http://52.20.56.186/nest_update',
  		type:'json',
  		mode: "sleep"
  	}, function(data) {
  		console.log("Success");
  	}, function(error) {
  		console.log("Shit!");
  	})
  } else if (e.payload.RUN_KEY) {
  	console.log("run");
  	ajax({
  		url: 'http://52.20.56.186/nest_update',
  		type:'json',
  		mode: "run"
  	}, function(data) {
  		console.log("Success");
  	}, function(error) {
  		console.log("Shit!");
  	})
  }
});