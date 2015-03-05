# dummy

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

Dummy project - used as a starting point for new libraries

## Configuration

 * Copy all files of this project
 * Edit :
  * package.json
  * bower.json
  * README.md
 * Put code in `src`, export from `src/index.js`
 * Put tests in `test`, use [mocha](http://mochajs.org/) and [should](http://shouldjs.github.io/)
 * Publish to npm `npm publish` (must be done for each release)
 * Publish to bower `bower publish` (only once)
 * Activate the hook on [travis](https://travis-ci.org/profile) (first test suite will be executed on next commit)

## Development

### Install dev dependencies

`npm install`

### Execute test suite

`npm test`

### Build dist files

`npm run build`

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/cheminfo-dummy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cheminfo-dummy
[travis-image]: https://img.shields.io/travis/cheminfo-js/dummy/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/dummy
[david-image]: https://img.shields.io/david/cheminfo-js/dummy.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/dummy
[download-image]: https://img.shields.io/npm/dm/cheminfo-dummy.svg?style=flat-square
[download-url]: https://npmjs.org/package/cheminfo-dummy