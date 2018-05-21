var addPages = require("../lib/index.js");
var resource = {
	name:'resource',
	srcPath:'./test/dist/src',
	staticPath: './test/dist/static',
	pages: [{
		name:'shareDetail',
		title:'共享资源详情',
		components: ['head','detail',{
			name:'review',
			components:['left','right']
		}],
		includes:{
			name:'common',
			components: ['top','rightNav','pagination']
		}
	}],
	common:{
		name:'common',
		components: ['card','top','tree','rightNav','rightSubNav','pagination']
	}
};

var community = {
	name:'community',
	srcPath:'./test/dist/src',
	staticPath: './test/dist/static',
	pages: [{
		name:'home',
		title:'社区',
		components: [{
			name:'left',
			components:['head',{
				name:'list',
				includes:[{
					prefix: '/community/common',
					components: ['listItem']
				}]
			}]
		}],
		includes: [{
			prefix: '/community/common',
			components: ['recent','top','pagination']
		}]
	},{
		name:'detail',
		title:'社区评论详情',
		components: [{
			name:'left',
			includes: [{
				prefix: '/community/common',
				components: ['listItem']
			}]
		}],
		includes: [{
			prefix: '/community/common',
			components: ['recent','top','pagination']
		}]
	}],
	common:{
		name:'common',
		components: ['listItem','recent','top','pagination','reviewBox']
	}
}

var pages = [resource,community];

addPages(pages);