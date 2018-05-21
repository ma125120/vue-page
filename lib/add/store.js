var fs = require('ma-fs');

var names = ['index','actions','getters','mutations','state'];

var addStore = function(config) {
	var storePath = `${config.srcPath}/${config.storePath}/modules/${config.name}/`,
			names = ['index','action','getters','mutation','state'],
			files = names.map(file=>`${storePath}/${file}.js`);
	files.map((file,i)=>{
		fs.touch(file,getCommonContent(names[i]));
	})
	fs.touch(files[0],getIndexContent());
}

var getIndexContent = function() {
	return `
${getOtherJs(names.slice(1))}
var store = {
	${names.slice(1).map(name=>name).join(",\n")}
}
export default store
	`;
}

var getCommonContent = function(name) {
	return `
var ${name} = {

}
export default ${name}
	`;
}

var getOtherJs = function(names) {
	return names.map(name=>{
		return `import ${name} from './${name}'`
	}).join("\n");
}


module.exports = addStore