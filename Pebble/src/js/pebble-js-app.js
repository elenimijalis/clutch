Pebble.addEventListener('ready',
  function(e) {
    console.log('PebbleKit JS is ready.');
  }
);

Pebble.addEventListener('appmessage', function(e) {
  console.log('PebbleKit JS Ready!');
  var request = new XMLHttpRequest();
  request.open("POST", "http://52.20.56.186/nest_update_temp");
  request.setRequestHeader('Content-Type', 'application/json');
  var reqBody = (e.payload.SLEEP_KEY) ? { "mode": "sleep", "temp": 65 } : { "mode": "run", "temp": 65 };
  request.send(JSON.stringify(reqBody));
});