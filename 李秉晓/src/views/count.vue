<template>
	<div>
		<div class="left" @click="go()"><</div>
		 <div @click="show=!show">
				<img style="width: 100%;" :src="data.bannerImg" alt="">
				<p class="counttitle">{{data.sightName}}</p>
		</div>
		<el-tree :data="data.categoryList" :props="defaultProps"></el-tree>
		<transition enter-active-class="fadeIn" leave-active-class="fadeInOut " name="fade">
			<div v-show="show" class="swiperbox  animated" @click="show=!show">
				<div class="imgs">
					<swiper >
						<swiper-slide v-for='item in data.gallaryImgs' >
							<img class="swiper-img" style="width: 100%;" :src="item">
						</swiper-slide>
					</swiper>
				</div>

			</div>
		</transition>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				show: false,
				data: [],
				defaultProps: {
					children: 'children',
					label: 'title'
				}
			}
		},
		created() {
			this.getlist()
		},
		methods: {
			async getlist() {
				const {
					data: res
				} = await this.$axios.get('static/mock/detail.json')
				this.data = res.data
				console.log(res)
			},
			go(){
				this.$router.push("/")
			}

		},
		computed: {
			
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.left {
		position: fixed;
		margin: 10px;
		color: #FFFDEF;
		text-align: center;
		line-height: 30px;
		border-radius: 50%;
		font-size: 20px;
		width: 30px;
		height: 30px;
		background-color: darkgray;
	}

	.counttitle {
		width: 100%;
		height: 20px;
		background-color: #000000;
		color: #fff;
	}

	.swiperbox {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #000000;
	}

	.imgs {
		position: absolute;
		top: 25%;
		width: 100%;
		height: 100px;
		
	}
	
</style>
