
<template>
	<div class="recent-page">
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	name: 'Recent',
	props:['data'],
	data () {
		return {

		}
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
	mounted() {

	}
}
</script>
<style scoped lang='scss'>

</style>
	