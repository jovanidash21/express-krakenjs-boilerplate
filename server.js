'use strict';

var app = require('./index');
var http = require('http');

var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
  console.log('Server listening on http://localhost:%d', this.address().port);
});

// browserSync setup
if ( process.env.NODE_ENV != 'production' ) {
  var browserSync = require('browser-sync');
  browserSync({
    files: ['./**/*'],
    online: false,
    port: 9000,
    proxy: 'localhost:8000',
    ui: false
  });
}
