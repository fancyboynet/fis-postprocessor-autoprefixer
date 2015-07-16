'use strict';

var autoprefixer = require('autoprefixer-core');
var postcss      = require('postcss');
module.exports = function(content, file, conf){
	var temp = autoprefixer(conf);
  	return postcss([temp]).process(content).css;
};
