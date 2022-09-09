/* import fs from 'node:fs';
import http from 'http'; */

const fs = require('node:fs');
const http = require('http');
const root = './public';
const filesInRoot = fs.readdirSync(root);

function parseURL(response, url) {
  let file = root + url;
  let content = { 'Content-Type': 'text/plain' };
  if (url == '/') {
    content['Content-Type'] = 'text/html';
    file = root + '/index.html';
  } else if (url.endsWith('.html')) {
    content['Content-Type'] = 'text/html';
  } else if (url.endsWith('css')) {
    content['Content-Type'] = 'text/css';
  } else if (url.endsWith('jpeg')) {
    content['Content-Type'] = 'image/jpeg';
  } else if (url.endsWith('.ico')) {
    content['Content-Type'] = 'image/x-icon';
  } else {
    file += '.txt';
  }
  const res = response.writeHead(200, content);
  const output = { res: res, file: file };
  return output;
}

let server = http.createServer((request, response) => {
  if (response.statusCode === 200) {
    const output = parseURL(response, request.url);
    output.res;
    fs.createReadStream(output.file).pipe(response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream(root + '404.html').pipe(response);
  }
  console.log('request was made: ' + request.url);
});

server.listen(3000, '127.0.0.1');
console.log('working');
