const shell = require('shelljs');
const assert = require('assert');

shell.config.silent = true;
shell.config.fatal = true;

const { exec } = shell;
let stdout;

assert.throws(() => {
  exec('node ./index.js');
});
console.log('Needs a file to require');

assert.throws(() => {
  exec('node ./index.js test/string');
});
assert.throws(() => {
  exec('node ./index.js test/array');
});
console.log('Doesn\'t invoke non-callables');

assert.doesNotThrow(() => {
  exec('node ./index.js test/function');
});
console.log('runs a module with no arguments');

stdout = exec('node ./index.js test/function arg1 arg2').stdout;
assert.equal(stdout, '{ \'0\': \'arg1\', \'1\': \'arg2\' }\n');
console.log('runs a module with arguments');
