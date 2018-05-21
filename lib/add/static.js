var fs = require('ma-fs');

var addStatic = function(config) {
	var staticPath = `${config.staticPath}/img/${config.name}`,
			names = config.pages.map(page=>`${staticPath}/${page.name}`);
	names.map(page=>{
		fs.mkdir(page);
	})
}

module.exports = addStatic