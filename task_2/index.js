"use strict";

const http = require('http'),
      url = require('url');
let counter = 0;

http.createServer((req, res) => {
    const urlParsed = url.parse(req.url, true);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    switch (urlParsed.pathname) {
        case '/index.html':
            counter++;
            res.end('Привіт світ!');
            break;
        case '/count.html':
            res.end(`Кількість запитів на "/index.html": ${counter}.`);
            break;
        default:
        res.statusCode = 404;
        res.end('Page not found');
    }
}).listen(3000);