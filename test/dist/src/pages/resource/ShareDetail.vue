
<template>
	<div class="ShareDetail-page">
		 <Top></Top>
<RightNav></RightNav>
<Pagination></Pagination>
<Head></Head>
<Detail></Detail>
<Review></Review>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Top from '@/components/resource/common/Top.vue'
import RightNav from '@/components/resource/common/RightNav.vue'
import Pagination from '@/components/resource/common/Pagination.vue'
import Head from '@/components/resource/shareDetail/Head.vue'
import Detail from '@/components/resource/shareDetail/Detail.vue'
import Review from '@/components/resource/shareDetail/Review.vue'

export default {
	metaInfo:{
		title: '共享资源详情'
	},
	name: 'ShareDetail',
	components:{
					Top,
			RightNav,
			Pagination,
			Head,
			Detail,
			Review,
	},
		computed: {
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
		},
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
	