"use strict";

const Memcached = require("memcached"),
    Q = require("q"),
    co = require("co");

let client = new Memcached("127.0.0.1:11211");

module.exports = {

    /**
     * Достает из memcached данные по указанному ключу
     *
     * @example curl -v -X GET "http://127.0.0.1:8081/memcached/bar"
     * @param next
     */
    getAction: function * (next){
        this.body = yield Q.npost(client, "get", [this.params.key]);
    },

    /**
     * @example curl -v -X PUT "http://127.0.0.1:8081/memcached/bar" -d '{"value":"baz","expires":90}' -H "Content-Type: application/json"
     * @todo Описать метод PUT /memcached/:key {"value":"baz","expires":90}, чтобы он менял данные в memcached по указанному ключу
     * @param next
     */
    putAction: function * (next){
        let check = false,
           _replace = client.replace,
            key = this.params.key,
            value = this.request.body.value,
            expires = this.request.body.expires;

        yield co( function* () {

            let prom = yield new Promise( (resolve, reject) => {
                _replace.call(client, key, value, expires,(err, res) => {
                    if(err){
                        reject(err);
                    } else {
                        check = true;
                        resolve(res);
                    }
                });
            });
            return prom;
        }).then(function(result){
            console.log(result);
        }, function(error){
            console.log(error);
        });

        if(check){
            this.status = 201;
            this.body = 'data is recorded';
        } else {
            this.status = 400;
            this.body = {message: "Bad Request"};
        }
    },

    /**
     * Устанаваливает значение заданному ключу
     *
     * @example curl -v -X POST "http://127.0.0.1:8081/memcached" -d '{"key":"bar","value":"foo","expires":60}' -H "Content-Type: application/json"
     * @param next
     */
    postAction: function * (next){

        try{
            yield Q.npost(client, "set", [this.request.body.key, this.request.body.value, this.request.body.expires]);
            this.status = 201;
            this.body = this.request.body;
        }catch(e){
            this.status = 400;
            this.body = {message: "Bad Request"};
        }

        yield next;

    },

    /**
     *
     * @todo Описать метод DELETE /memcached/:key который удалял бы по ключу из memcached. Использовать другие методы преобразования функций для работы с memcached
     * @example curl -v -X DELETE "http://127.0.0.1:8081/memcached/bar"
     * @param next
     */

    /*this.body = yield Q.npost(client, "delete", [this.params.key]);
    * ....... */

    deleteAction: function * (next){

        let check = false,
            _del = client.delete,
            key = this.params.key;

        yield co( function* () {

            let prom = yield new Promise( (resolve, reject) => {
                _del.call(client, key, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        check = true;
                        resolve(res);
                    }
                });
            });

            return prom;
        }).then(function(result){
            console.log(result);
        }, function(error){
            console.log(error);
        });

        if(check){
            this.status = 201;
            this.body = 'data is deleted';
        } else {
            this.status = 400;
            this.body = {message: "Bad Request"};
        }
    }
};