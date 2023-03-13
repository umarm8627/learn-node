// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const users = require('./4-names');
const sayHi = require('./5-utills');
const data = require('./6-alternative-flavor');
require('./7-mind-granade');
sayHi(users.john);
sayHi(users.peter);
sayHi(users.wick);