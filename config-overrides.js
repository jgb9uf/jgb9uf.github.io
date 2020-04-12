const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'@images': path.resolve(__dirname, `${paths.appSrc}/static/images`),
		'@audio': path.resolve(__dirname, `${paths.appSrc}/static/audio`)
	})(config, env);
  return config;
}