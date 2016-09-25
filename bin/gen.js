require('babel-core/register');
require('babel-polyfill');
const hia = require('hia').default;
hia({ basedir: __dirname + '/..', configPath: `${__dirname}/../hia.yaml` });
