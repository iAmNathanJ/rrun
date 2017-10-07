# rrun

This is a small utility to require and run modules from the command line.

## Install
`npm i -D rrun`

## Usage

### Command Line:
```bash
$ rrun path/to/some-module [arguments ...]
```

`rrun` will require a file and run it's default export with any arguments passed along. It can be useful for running development tasks. This way, tasks can be run directly from npm scripts or the command line, but they can also be required and run from other task files. It's not intended to run anything other than basic node modules that export a single function.

### Example Task Setup:
Assume we have a task to compile sass and we want to run it from npm scripts and also from our watch task.
```js
// sass-task.js

module.exports = () => {
  // do sassy stuff
};
```

You can use it in your watch task:
```js
const chokidar = require('chokidar');
const sass = require('path/to/sass-task');

chokidar.watch('./src/scss/**/*.scss').on('change', sass);
```

And you can `rrun` it from your npm scripts:
```json
"scripts": {
  "sass": "rrun path/to/sass-task"
}
```

**PSA:** You can do the same thing without using `rrun`:
```json
"scripts": {
  "any-task": "node -e \"require('path/to/module')()\""
}
```
But ☝️ that is kind of ugly and co-workers may find it confusing.
