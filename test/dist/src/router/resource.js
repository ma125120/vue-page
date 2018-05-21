
const resourceView = () => import('@/pages/Resource')

const ShareDetail = () => import('@/pages/resource/ShareDetail');

export default {
	path:'/resource',
	component:resourceView,
	children:[
		{
			path:'shareDetail',
			name: 'ShareDetail',
			component: ShareDetail
		},
	]
}
	
	