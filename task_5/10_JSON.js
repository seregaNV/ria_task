var addresses = require('./addresses');
var resultObj = [];
var regExpStr = /(\s*(ул|пр-т|пер|пл)\.*\s*)?([\dа-яА-ЯёЁ\-.]+\s*[а-яА-ЯёЁ\-.]+)([,\s(дом)]*)([\dа-яА-ЯёЁ\-]*)\D*(\d*)/;

for (var i = 0; i < addresses.length; i++) {
    var address = {};
    regExpStr.exec(addresses[i]);
    address.street = RegExp.$3;
    address.house = RegExp.$5;
    address.flat = RegExp.$6;
    resultObj.push(address);
 }

var resultJSON = JSON.stringify(resultObj, null, 4);
console.log(resultJSON);

module.exports = resultJSON;








