#! /usr/bin/env node
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var path = require('path');

var check = function check(exp, msg) {
  if (!exp) throw new Error(msg);
};

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = _toArray(_process$argv$slice),
    file = _process$argv$slice2[0],
    args = _process$argv$slice2.slice(1);

check(typeof file === 'string', `Module path must be a string: [${typeof file}] ${file}`);

var fn = require(path.resolve(process.cwd(), file));
check(typeof fn === 'function', `Module is not executable: [${typeof fn}] ${fn}`);

fn.apply(undefined, _toConsumableArray(args));
