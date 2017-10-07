#! /usr/bin/env node
const path = require('path');
const [ file, ...args ] = process.argv.slice(2);
require(path.resolve(process.cwd(), file))(...args);
