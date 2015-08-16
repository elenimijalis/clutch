Pebble.addEventListener('ready',
  function(e) {
    console.log('PebbleKit JS is ready.');
  }
);

Pebble.addEventListener('appmessage', function(e) {
  console.log('PebbleKit JS Ready!');
  var request = new XMLHttpRequest();
  if (e.payload.SLEEP_KEY) {
  	console.log("sleep");
    request.open("POST", "http://52.20.56.186/nest_update");
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  	request.send(JSON.stringify({ mode: "sleep" }));
  } else if (e.payload.RUN_KEY) {
  	console.log("run");
    request.open("POST", "http://52.20.56.186/nest_update");
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(JSON.stringify({ mode: "run" }));
  }
});