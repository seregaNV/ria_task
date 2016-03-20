module.exports = {
    "get": {
        "/hello": require("./controllers/helloController").getAction,
        "/users": require("./controllers/usersController").getUsers
    },
    "post": {
        "/user": require("./controllers/usersController").postUser
    }
};
//curl -X POST "http://localhost:3000/user" -H 'Content-Type: application/json' -d'{"nick": "friend", "name": "Feofan", "e-mail": "feofan.albertovich@gmail.com", "description": "poet", "age": "45"}'
