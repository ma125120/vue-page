var Upper=function(str) {
	if(!str||typeof str == 'object') {
		return false;
	}
	return str[0].toUpperCase()+str.slice(1);
}

var getTemp = function(name,config) {
	return `
<template>
	<div class="${name}-page">
		<router-view></router-view>
	</div>
</template>

<script>
${config.vuex?"import \{ mapState, mapGetters, mapMutations, mapActions \} from 'vuex'":""}
export default {
	name: '${Upper(name)}',
	props:['data'],
	data () {
		return {

		}
	},
	${VuexMap(config)}
	mounted() {

	}
}
</script>
<style scoped lang='scss'>

</style>
	`
};
/*
${page.includes && getComponentsHTML(config,page.includes)}
${page.includes && getComponentsName(config,page.includes)}

${page.includes && getImportComponent(config,page.includes)}
*/
var getPageTemp = function(config,page,path) {
	var name = Upper(page.name) || Upper(page),
			[ imports, names ,htmls ] = getAll(config,page,path);
	return `
<template>
	<div class="${name}-page">
		 ${htmls}
	</div>
</template>

<script>
${config.vuex?"import \{ mapState, mapGetters, mapMutations, mapActions \} from 'vuex'":""}
${imports}

export default {
	${addMeta(page)}
	name: '${name}',
	components:{
		${names}
	},
	${VuexMap(config)}
	data () {
		return {

		}
	},
	mounted() {

	}
}
</script>
<style scoped lang='scss'>

</style>
	`
};
var addMeta = function(page) {
	if(page.title) {
		return `metaInfo:{
		title: '${page.title}'
	},`
	}
	return '';
}
var VuexMap = function(page) {
	if(page.vuex) {
		return `	computed: {
			...mapState({

			}),
			...mapGetters({

			}),
		},
		methods:{
			...mapMutations({
	      
	    }),
	    ...mapActions({
	      
	    })
		},`
	}
	return ''
}
var getAll = function(config,page,path) {
	if(!page) return ;
	var [ imports, names ,htmls ] = [ [], [], [] ];
	_getImportComponent({config, page, path, arr: imports});
	_getComponentsName({config, page, path, arr: names});
	_getComponentsHTML({config, page, path, arr: htmls});
	return [ imports.join("\n"), names.join("\n"), htmls.join("\n") ];
}

var _getImportComponent = function({config, page, path, arr }) {
	if(!page) return ;
	if(page.includes){
		_getImportComponent({
			config, 
			page: page.includes, 
			path: path, 
			arr
		});
	}
	var cmpName = "",
			path = path || `@/components/${config.name}/${page.name}`;
	path = path.replace("./src/","@/").replace("///","/");

	if(page&&page.components) {
		let results = page.components.map(cmp=>{
			cmpName = Upper(cmp.name) || Upper(cmp);
			if(page.prefix) {
				path = `@/components${page.prefix}`;
			}
			return `import ${cmpName} from '${path}/${cmpName}.vue'`
		});
		arr.push(...results);
	} else if(Array.isArray(page)){
		page.map(cmp=>{
			_getImportComponent({
				config, 
				page: cmp, 
				path:`${path}/${(cmp.name||cmp)}`, 
				arr
			});
		});
	}
}

var _getComponents = function({config, page, path, arr,mapFn }) {
	if(!page) return ;
	if(page.includes){
		_getComponents({
			config,
			page: page.includes,
			path,
			arr,
			mapFn
		});
	}
	var cmpName = "";
	if(page&&page.components) {
		let results = page.components.map(mapFn);
		arr.push(...results);
	} else if(Array.isArray(page)){
		page.map(cmp=>{
			_getComponents({
				config,
				page: cmp,
				path: path+"/"+(cmp.name||cmp),
				arr,
				mapFn
			})
		})
	}
}
var _getComponentsName = function({config, page, path, arr }) {
	var mapFn = function(cmp) {
		var cmpName = Upper(cmp.name) || Upper(cmp);
		return `			${Upper(cmpName)},`;
	}
	_getComponents({config, page, path, arr,mapFn });
}
var _getComponentsHTML = function({config, page, path, arr }) {
	var mapFn = function(cmp) {
		var cmpName = Upper(cmp.name) || Upper(cmp);
		return `<${cmpName}></${cmpName}>`
	}
	_getComponents({config, page, path, arr,mapFn });
}
// var getComponentsHTML = function(config,page,path) {
// 	if(page.includes){
// 		getComponentsHTML(config,page.includes,path);
// 	}
// 	if(!page) return ;
// 	var cmpName = "";
// 	if(page&&page.components) {
// 		return page.components.map(cmp=>{
// 			cmpName = Upper(cmp.name) || Upper(cmp);
// 			return `<${cmpName}></${cmpName}>`
// 		}).join("\n");
// 	} else if(Array.isArray(page)){
// 		page.map(cmp=>{
// 			getComponentsName(config,cmp,path+(cmp.name||cmp))
// 		})
// 	}
// }
var getPathPrefix = function() {
	return `@/components/${config.name}/${page.name}/`
}
module.exports = {
	getPageTemp,
	getTemp
};


