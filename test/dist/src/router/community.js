
const communityView = () => import('@/pages/Community')

const Home = () => import('@/pages/community/Home');
const Detail = () => import('@/pages/community/Detail');

export default {
	path:'/community',
	component:communityView,
	children:[
		{
			path:'home',
			name: 'Home',
			component: Home
		},{
			path:'detail',
			name: 'Detail',
			component: Detail
		},
	]
}
	
	