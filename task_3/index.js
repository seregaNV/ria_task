"use strict";
var http = require("http"),
    url = require("url"),
    routes = require("./routes");

function requestHandler(req, res){

    var parsedUrl = url.parse(req.url, true),
        method = req.method.toLowerCase();

    if(routes[method][parsedUrl.pathname]){
        routes[method][parsedUrl.pathname](req, res, function(err){
            if(err){
                res.statusCode = 500;
                res.write(JSON.stringify({
                    "message": err.message,
                    "status": "Internal Server Error"
                }));
                res.end();
            }else{
                res.end();
            }
        });
    }else{
        res.statusCode = 404;
        res.end("Not Found");
    }
}

var server  = http.createServer(requestHandler);

server.listen(3000);