var config = require('../test/index.js');
var  { getTemp, getPageTemp } = require('./temp/index.js');

const fs = require('ma-fs');

var addStatic = require('./add/static.js');
var addStore = require('./add/store.js');
var addRouter = require('./add/router.js');
//console.log(fs.touch('./my/mkdir/index.js',`import fs1 from './fs.js'`,true))

var addPages = function (config) {
	var config = initConfig(config);

	addPage(config,config.pagePath);
	addComponent(config, config.componentPath);
	addStatic(config);
	addStore(config);
	addRouter(config);
}
var initConfig=function(config) {
	var defaultConfig = {
		srcPath:"../src",
		pagePath:"/pages",
		componentPath: "/components",
		staticPath: "../static",
		storePath: "/store",
		routerPath: "/router",
		vuex: true
	}
	var config = Object.assign({},defaultConfig,config);
	config.pagePath = `${config.srcPath}/${config.pagePath}`;
	config.componentPath = `${config.srcPath}/${config.componentPath}/${config.name}`;
	return config;
}
//增加pages目录下的vue及目录
var addPage = function(config,pagePath) {
	var pagesPath = pagePath,
			names = [...config.pages.map(page=>page.name)];
	//新建模块的vue文件
	var _module = `${pagesPath}/${Upper(config.name)}.vue`;
	fs.touch(_module,getTemp(config.name,config));
	//获取并设置pages目录下的页面
	var pages = [...names].map(cmp=>`${pagesPath}/${config.name}/${Upper(cmp)}.vue`);

	pages.map((page,i)=>{
		fs.touch(page, getPageTemp(config,config.pages[i]));
	});

}

var addComponent = function(config, componentPath) {
	var pages = config.pages;
	pages.map(page=>addPageComponent(config,page,`${componentPath}/${page.name}`));
	//添加公共模块组件
	addPageComponent(config,config.common,`${config.componentPath}/common`);
}
//增加components的模块和vue文件
var addPageComponent = function(config,page,componentPath , debug) {
	if(!componentPath) throw new Error('新建页面组件时path不能为空');

	var names = getComponentsName(page);
	var components = [...names].map(cmp=>`${componentPath}/${Upper(cmp)}`);

	components.map((component,i)=>{
		if(page.components&&page.components[i].components) {
			fs.touch(`${component}.vue`, getPageTemp(config, page.components[i], component));
			addPageComponent(config,page.components[i].components,component);
		} else {
			fs.touch(`${component}.vue`,getTemp(names[i],config));
		}
	});
}
var addChildComponent = function() {

}
var getComponentsName=function(page, child) {
	if(page&&page.components) {
		return getComponentsNameFromArray(page.components)
	} else if(Array.isArray(page)) {
		return getComponentsNameFromArray(page);
	}
	return [];
}
var getComponentsNameFromArray=function(arr) {
	return arr.map(cmp=>{
		if(typeof cmp=='object' && cmp.name) {
			return cmp.name
		}
		return cmp
	});
}
var Upper=function(str) {
	if(!str) {
		return false;
	}
	return str[0].toUpperCase()+str.slice(1);
}

module.exports = addPages

