
<template>
	<div class="rightNav-page">
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	name: 'RightNav',
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
	