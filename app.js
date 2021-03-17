const second = require('./second/app');
console.log('This is the child branch');

let result = second.data();
console.log(result);
