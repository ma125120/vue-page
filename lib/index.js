var addPages = require("./create.js");

var isArray = function(data) {
	return Object.prototype.toString.call(data).slice(8,-1) == "Array";
};
var isObject = function(data) {
	return Object.prototype.toString.call(data).slice(8,-1) == "Object";
};
var isFunction = function(data) {
	return Object.prototype.toString.call(data).slice(8,-1) == "Function";
};

var _addPages = function(pages) {
  if(isArray(pages)) {
    pages.map(page=>addPages(page))
  } else if(isObject(pages)) {
    addPages(pages)
  } else {
    throw new Error('参数不是数组，也不是对象，不符合要求');
  }
}

module.exports = _addPages