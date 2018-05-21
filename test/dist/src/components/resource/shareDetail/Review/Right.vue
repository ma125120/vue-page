
<template>
	<div class="right-page">
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	name: 'Right',
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
	