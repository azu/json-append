#!/usr/bin/env node
var append = require('../').append;
var concat = require('concat-stream');
var file = process.argv[2];
if (!file) {
    throw new Error("usage: echo 'data' | json-append output.json")
}
var input = process.stdin;
input.pipe(concat(function (buf) {
    append(buf.toString('utf8'), file);
}));