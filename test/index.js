var addPages = require("../lib/index.js");
var page = {
	name:'resource',
	srcPath:'./dist/src',
	staticPath: './dist/static',
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
}

// addPages(page);
module.exports = page