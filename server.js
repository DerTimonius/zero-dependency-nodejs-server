import fs from 'node:fs';
import http from 'node:http';

const root = './public';
const server = http.createServer((request, response) => {
  if (request.url === '/' || request.url === '/index.html') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(root + '/index.html').pipe(response);
  } else if (request.url === '/index.css') {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    fs.createReadStream(root + '/index.css').pipe(response);
  } else if (request.url === '/hero.jpeg') {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    fs.createReadStream(root + '/her.jpeg').pipe(response);
  } else if (request.url === '/lorem-ipsum') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(root + '/lorem-ipsum.txt').pipe(response);
  } else if (request.url === '/memes' || request.url === '/memes/index.htm') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(root + '/memes/index.htm').pipe(response);
  } else if (request.url === '/memes/meme.jpg') {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    fs.createReadStream(root + '/memes/meme.jpg').pipe(response);
  } else if (request.url === '/test') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(root + '/test.txt').pipe(response);
  } else if (request.url === '/another-test') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(root + '/another-test.txt').pipe(response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream(root + '/404.html').pipe(response);
  }
  console.log('request was made: ' + request.url);
});

server.listen(3000, '127.0.0.1');
console.log('working');
