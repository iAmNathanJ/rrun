const shell = require('shelljs');
const assert = require('assert');

shell.exec('node ./index.js test/file', { silent: true }, (code) => {
  assert.equal(code, 0);
  console.log('success');
});

shell.exec('node ./index.js test/file arg1', { silent: true }, (code, stdout) => {
  assert.equal(stdout, '{ \'0\': \'arg1\' }\n');
  console.log('success');
});

shell.exec('node ./index.js test/file arg1 arg2', { silent: true }, (code, stdout) => {
  assert.equal(stdout, '{ \'0\': \'arg1\', \'1\': \'arg2\' }\n');
  console.log('success');
});

