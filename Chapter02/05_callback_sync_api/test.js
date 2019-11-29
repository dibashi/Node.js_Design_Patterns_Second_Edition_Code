"use strict";

const fs = require('fs');
const cache = {};
function consistentReadSync(filename) {
  if(cache[filename]) {
    return cache[filename];
  } else {
    cache[filename] = fs.readFileSync(filename);
    return cache[filename];
  }
}

console.log(consistentReadSync('data.txt'));
// the next call will read from the cache
console.log(consistentReadSync('data.txt'));

console.log(typeof cache["data.txt"]);