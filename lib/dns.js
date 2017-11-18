'use strict';

const {lookup, lookupService} = require('dns');
const promisify = require('util').promisify;

module.exports.lookup = (hostname, options) => {
	return promisify(lookup)(hostname, options);
};

module.exports.lookupService = (address, port) => {
	return promisify(lookupService)(address, port);
};
