"use strict";
var ect = require("ect");
var renderer = ect({ root : __dirname + '/../views' });
module.exports = {
    getAction: function(req, res, next){
        setTimeout(function(next){
            res.statusCode = 200;
            try{
                res.write(renderer.render('hello.ect', {
                    message: "Hello world"
                }));
                next();
            }catch(e){
                next(e);
            }
        }, 500, next)
    },
    postAction: function(req, res, next){

    }
};