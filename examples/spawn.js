var system = require('system');
var spawn = system.spawn,
    sleep = system.sleep;

exports.app = function(request) {
  spawn(function() {
    sleep(10000);
    console.log('Hello Server!');
  });
  return {
      status : 200,
      headers : {},
      body : ['Hello Client!\n']
  };
}
