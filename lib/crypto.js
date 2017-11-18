'use strict';

const promisify = require('util').promisify;
const {pbkdf2, randomBytes, randomFill} = require('crypto');

module.exports.pbkdf2 = (password, salt, iterations, keylen, digest) => promisify(pbkdf2)(password, salt, iterations, keylen, digest);

module.exports.randomBytes = (size) => promisify(randomBytes)(size);

module.exports.randomFill = (buffer, offset, size) => promisify(randomFill)(buffer, offset, size);
