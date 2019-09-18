'use strict';
let http = require('http');

let staticServe = function (req, res) {
  res.statusCode = 200;
  res.write('Hello');
  return res.end();
};

let httpServer = http.createServer(staticServe);

httpServer.listen(3000);
console.log('server on port:3000');
