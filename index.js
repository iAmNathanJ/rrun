#! /usr/bin/env node
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var path = require('path');

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = _toArray(_process$argv$slice),
    file = _process$argv$slice2[0],
    args = _process$argv$slice2.slice(1);

require(path.resolve(process.cwd(), file)).apply(undefined, _toConsumableArray(args));
