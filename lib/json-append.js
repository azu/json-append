// LICENSE : MIT
"use strict";
const path = require("path");
const fs = require("fs");
function append(item, filePath) {
    var json = [];
    var absoluteFilePath = path.join(process.cwd(), filePath);
    try {
        json = require(absoluteFilePath);
    } catch (e) {
        // no
    }
    json.push(item);
    fs.writeFileSync(absoluteFilePath, JSON.stringify(json, null, 2), "utf-8");
}
module.exports.append = append;