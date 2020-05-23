# name2mime

[![Build Status](https://travis-ci.org/imhashir/name2mime.svg?branch=master)](https://travis-ci.org/imhashir/name2mime) [![dependencies Status](https://david-dm.org/imhashir/name2mime/status.svg)](https://david-dm.org/imhashir/name2mime) [![devDependencies Status](https://david-dm.org/imhashir/name2mime/dev-status.svg)](https://david-dm.org/imhashir/name2mime?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A micro module to get MIME types from filename, given that filename contains the extension as well.

# Installation

```sh
$ npm install name2mime --save
```
or
```sh
$ yarn add name2mime
```

# Data Source
Thanks to the amazing guys @ [freeCodeCamp](https://www.freeformatter.com/mime-types-list.html) for compiling [this](https://www.freeformatter.com/mime-types-list.html) list of 600+ MIME types.

# Sample

```
const getMime = require('name2mime');

const value = getMime('filename.jpg');

console.log(value);

// { type: 'image/jpeg', name: 'JPEG Image' }
```

# For Maintainers & Contributors
### Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# License

MIT © [Hashir Baig](www.meethashir.com)
