"use strict";
var db = [];
module.exports = {
    getAllUsers: function(){
        return db;
    },
    setUser: function(dataObj){
        for (var i = 0; i < db.length; i++) {
            if (db[i].nick == dataObj.nick) {
                db.splice(i, 1);
            }
        }
        db.push(dataObj);
        console.log('db - ', db);
    }
};

//curl -X POST "http://localhost:3000/user" -H 'Content-Type: application/json' -d'{"nick": "friend", "name": "Feofan", "e-mail": "feofan.albertovich@gmail.com", "description": "poet", "age": "48"}'