var addresses = require('./addresses');
var result = [];
var regExpStr = /(\s*(ул|пр-т|пер|пл)\.*\s*)?([\dа-яА-ЯёЁ\-.]+\s*[а-яА-ЯёЁ\-.]+)([,\s(дом)]*)([\dа-яА-ЯёЁ\-]*)\D*(\d*)/;

for (var i = 0; i < addresses.length; i++) {
    var address = {};
    regExpStr.exec(addresses[i]);
    address.street = RegExp.$3;
    address.house = RegExp.$5;
    address.flat = RegExp.$6;
    result.push(address);
 }

//console.log(result);

module.exports = result;








