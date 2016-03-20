//console.log(module);
var User = function(name) {
    this.getName = function() {
        return name;
    }
}
//var user = new User(name);
module.exports = function(name) {
    return new User(name)
};
//module.exports = 'Petya';