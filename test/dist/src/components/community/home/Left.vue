
<template>
	<div class="Left-page">
		 <Head></Head>
<List></List>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Head from './test/dist/src//components/community/home/Left/Head.vue'
import List from './test/dist/src//components/community/home/Left/List.vue'

export default {
	
	name: 'Left',
	components:{
					Head,
			List,
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
	