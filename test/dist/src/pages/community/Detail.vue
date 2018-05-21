
<template>
	<div class="Detail-page">
		 <Recent></Recent>
<Top></Top>
<Pagination></Pagination>
<Left></Left>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Recent from '@/components/community/common/Recent.vue'
import Top from '@/components/community/common/Top.vue'
import Pagination from '@/components/community/common/Pagination.vue'
import Left from '@/components/community/detail/Left.vue'

export default {
	metaInfo:{
		title: '社区评论详情'
	},
	name: 'Detail',
	components:{
					Recent,
			Top,
			Pagination,
			Left,
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
	