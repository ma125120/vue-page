
<template>
	<div class="Review-page">
		 <Left></Left>
<Right></Right>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Left from './test/dist/src//components/resource/shareDetail/Review/Left.vue'
import Right from './test/dist/src//components/resource/shareDetail/Review/Right.vue'

export default {
	
	name: 'Review',
	components:{
					Left,
			Right,
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
	