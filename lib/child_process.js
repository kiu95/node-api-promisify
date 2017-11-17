'use strict';

const promisify = require('util').promisify;
const {exec, execFile} = require('child_process');

module.exports.exec = (command, options) => {
	return promisify(exec)(command, options);
};

module.exports.execFile = (file, args, options) => {
	return promisify(execFile)(file, args, options);
};
