'use strict';

const promisify = require('util').promisify;
const {
	access, appendFile, chmod, chown, close,
	copyFile, exists, fchmod, fchown, fdatasync,
	fstat, fsync, ftruncate, futimes, lchmod,
	lchown, link, lstat, mkdir, mkdtemp, open,
	read, readdir, readFile, readlink, realpath,
	rename, rmdir, stat, symlink, truncate, unlink,
	utimes, write, writeFile, ...rest
} = require('fs');

module.exports.access = (path, mode) => promisify(access)(path, mode);

module.exports.appendFile = (file, data, options) => promisify(appendFile)(file, data, options);

module.exports.chmod = (path, mode) => promisify(chmod)(path, mode);

module.exports.chown = (path, uid, gid) => promisify(chown)(path, uid, gid);

module.exports.close = (fd) => promisify(close)(fd);

module.exports.copyFile = (src, dest, flags) => promisify(copyFile)(src, dest, flags);

module.exports.exists = (path) => promisify(exists)(path);

module.exports.fchmod = (fd, mode) => promisify(fchmod)(fd, mode);

module.exports.fchown = (path, uid, gid) => promisify(fchown)(path, uid, gid);

module.exports.fdatasync = (fd) => promisify(fdatasync)(fd);

module.exports.fstat = (fd) => promisify(fstat)(fd);

module.exports.fsync = (fd) => promisify(fsync)(fd);

module.exports.ftruncate = (fd, len) => promisify(ftruncate)(fd, len);

module.exports.futimes = (fd, atime, mtime) => promisify(futimes)(fd, atime, mtime);

module.exports.lchmod = (path, mode) => promisify(lchmod)(path, mode);

module.exports.lchown = (path, uid, gid) => promisify(lchown)(path, uid, gid);

module.exports.link = (existingPath, newPath) => promisify(link)(existingPath, newPath);

module.exports.lstat = (path) => promisify(lstat)(path);

module.exports.mkdir = (path, mode) => promisify(mkdir)(path, mode);

module.exports.mkdtemp = (prefix, options) => promisify(mkdtemp)(prefix, options);

module.exports.open = (path, flags, mode) => promisify(open)(path, flags, mode);

module.exports.read = (fd, buffer, offset, length, position) => promisify(read)(fd, buffer, offset, length, position);

module.exports.readdir = (path, options) => promisify(readdir)(path, options);

module.exports.readFile = (path, options) => promisify(readFile)(path, options);

module.exports.readlink = (path, options) => promisify(readlink)(path, options);

module.exports.realpath = (path, options) => promisify(realpath)(path, options);

module.exports.rename = (oldPath, newPath) => promisify(rename)(oldPath, newPath);

module.exports.rmdir = (path) => promisify(rmdir)(path);

module.exports.stat = (path) => promisify(stat)(path);

module.exports.symlink = (target, path, type) => promisify(symlink)(target, path, type);

module.exports.truncate = (path, len) => promisify(truncate)(path, len);

module.exports.unlink = (path) => promisify(unlink)(path);

module.exports.utimes = (path, atime, mtime) => promisify(utimes)(path, atime, mtime);

module.exports.write = (fd, buffer, offset, length, position) => promisify(write)(fd, buffer, offset, length, position);

module.exports.writeFile = (file, data, options) => promisify(writeFile)(file, data, options);

module.exports = {...module.exports, ...rest};
