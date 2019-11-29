
const fs = require('fs');
const cache = {};

function inconsistentRead(filename, callback) {
    if (cache[filename]) {
        console.log("同步执行的")
        callback(cache[filename]);
    } else {
        fs.readFile(filename, function (err, data) {
            console.log("异步执行的");
            cache[filename] = data;
            callback(data);
        })
    }
}

inconsistentRead("res.txt", (data) => {
    console.log(data);

    inconsistentRead("res.txt", (data) => {
        console.log(data);
    });
});


