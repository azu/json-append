// LICENSE : MIT
"use strict";
const path = require("path");
const fs = require("fs");
function append(item, filePath) {
    // guard
    if (item == null || item.length == 0) {
        return;
    }
    var itemObject;
    try {
        itemObject = JSON.parse(item);
    } catch (e) {
        itemObject = item;
    }
    var json = [];
    var absoluteFilePath = path.join(process.cwd(), filePath);
    try {
        json = require(absoluteFilePath);
    } catch (e) {
        // no
    }
    json.push(itemObject);
    fs.writeFileSync(absoluteFilePath, JSON.stringify(json, null, 2), "utf-8");
}
module.exports.append = append;