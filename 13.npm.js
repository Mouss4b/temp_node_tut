// local dependency - use it only in this particular project
// code:  npm i <packageName>

//global dependency - use it in any project 
// npm install -g <packageName> 
// sudo npm install -g <packageName> (mac) 

// missings (conditions) : 
// 1- package.json

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

console.log(_.flattenDeep(items));