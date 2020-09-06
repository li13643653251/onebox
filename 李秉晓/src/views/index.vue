<template>
	<div>

		<headertop ></headertop>
		<div class="wrapper">
			<swiper :list="swiperlist"></swiper>
		</div>
		<div class="icons">
			<iconsswiper :listicons="iconsdata"></iconsswiper>
		</div>
		<div class="hot">
			<p class="hothearder">热门推荐</p>
			<div class="hotlist">
				<ul>
					<li v-for="(item,i) in hotlist">
						<img :src="item.imgUrl" alt="">
						<div class="hotleft">
							<p class="title">{{item.title}}</p>
							<span class="text">{{item.desc}}</span>
							<div class="content" @click="count()"><span class="content">查看详情</span></div>
						</div>
					</li>
				</ul>
			</div>
			<p class="hothearder">周末去哪里</p>
			<div class="weekend">
				<ul>
					<li v-for="(item,k) in weekendList">
						<p class="title">{{item.title}}</p>
						<p class="text">{{item.desc}}</p>
						<img :src="item.imgUrl" alt="">
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
		import headertop from './header.vue'
		import swiper from './swipre.vue'
		import iconsswiper from './icons.vue'
		export default{
			data(){
				return {
					swiperlist: [],
					iconsdata:[],
					hotlist: [],
					weekendList:[]
				}
			},
			created() {
				this.swiperdata()
			},
			methods:{
				async swiperdata(){
					
					const {data:res} =  await this.$axios.get('static/mock/index.json')
					console.log(res.data)
				    this.swiperlist=res.data.swiperList
					this.iconsdata=res.data.iconList
					this.hotlist = res.data.recommendList
						this.weekendList = res.data.weekendList
					console.log(this.iconsdata)
				},
				count(){
					this.$router.push("/count")
					
				}
			},
			computed:{
				
			},
			components:{
				headertop,
				swiper,
				iconsswiper
			}
		}
</script>

<style>
	.hothearder{
		padding: 10px;
	}
	.hotlist {
		display: flex;
		width: 100%;
		background-color: #fff;
	}
	.hotlist img {
		width: 25%;
	
	}
	.hotlist ul li {
		padding: 10px;
		font-size: 14px;
		display: flex;
	}
	.content{
		line-height: 24px;
		margin: 10px;
		width: 70px;
		height: 24px;
		font-size: 12px;
		background-color: orange;
		text-align: center;
		color: #fff;
			
	}
	.weekend{
		width: 100%;
		
	}
	.weekend ul li{
		width: 100%;
		height: 200px;
	}
	.weekend ul li img{
		width: 100%;
	}
	.weekend .title{
		font-size:13px;
		margin-bottom: 10px;
	}
	.weekend .text{
		font-size: 12px;
		
		margin-bottom: 10px;
	}
</style>
