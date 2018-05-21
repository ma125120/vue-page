var fs = require('ma-fs');

var addRouter = function(config) {
	var routerPath = `${config.srcPath}/${config.routerPath}/${config.name}.js`;

	fs.touch(routerPath,`
${getViewContent(config)}
${getImportContent(config)}
${getExportContent(config)}
	`,true);

}

var getViewContent = function(config) {
	return `const ${config.name}View = () => import('@/pages/${Upper(config.name)}')\n`;
}
var getImportContent = function(config) {
	return config.pages.map(page=>{
		return `const ${Upper(page.name)} = () => import('@/pages/${config.name}/${Upper(page.name)}');`
	}).join("\n");
}
var getExportContent = function(config) {
	return `
export default {
	path:'/${config.name}',
	component:${config.name}View,
	children:[
		${getChildrenContent(config)}
	]
}
	`
}
var getChildrenContent = function(config) {
	return  config.pages.map(page=>{
		return `{
			path:'${page.name}',
			name: '${Upper(page.name)}',
			component: ${Upper(page.name)}
		},`
	}).join("");
}

var Upper=function(str) {
	return str[0].toUpperCase()+str.slice(1);
}

module.exports = addRouter
