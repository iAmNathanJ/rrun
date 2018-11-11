#! /usr/bin/env node
import path from 'path';

const check = (exp, msg) => {
  if (!exp) throw new Error(msg);
};

const [ file, ...args ] = process.argv.slice(2);
check(typeof file === 'string', `Module path must be a string: [${typeof file}] ${file}`);

const fn = require(path.resolve(process.cwd(), file));
check(typeof fn === 'function', `Module is not executable: [${typeof fn}] ${fn}`);

fn(...args);
