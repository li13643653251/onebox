<template>
	<view>
		<!-- 头部搜索 -->
		<view class="fenleiyeheader">
			<!-- 扫描二维码 -->
			<view class="btn">
				<view class="mix-icon icon-saoma  ">
				</view>
			</view>
			<maoyuguoji :width='width'></maoyuguoji>
			<!-- 通知栏 -->
			<view class="btn">
				<view class="mix-icon icon-xiaoxi">
				</view>
				<p class="fenleiyetongzhi size12">1</p>
			</view>
		</view>
		<!-- 分类区 -->
		<view style="display: flex; background-color:#F5F5F5 ;">
			<scroll-view scroll-y="true" class="fenleiyeleft" :style="{height:srollHeight+`px`}">
				<ul class="fenleiyeul">
					<li class="fenleiyeli " :class="{'activeli fenleiyeli ':allindex==index}" v-for="(item,index) in leftmenu"
					 @touchend="leftmenuclick(index,item.catId)"  :key="index">{{item.name}}</li>
				</ul>
			</scroll-view>
			<scroll-view scroll-y="true" class="fenleiyeright" :style="{height:srollHeight+`px`}">
				<!-- 分类轮播区 -->
				<swiper class="fenleiyelunbo" circular indicator-dots autoplay>
					<swiper-item>
						<view class="fenleiyelunboitem" style="background-color: #CCFF33;">
							<img src="../../../static/category/1.jpg" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="fenleiyelunboitem" style="background-color: #99FFFF;">
							<img src="../../../static/category/2.jpg" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="fenleiyelunboitem" style="background-color: #99FF00;">
							<img src="../../../static/category/3.jpg" alt="">
						</view>
					</swiper-item>
				</swiper>
				<!-- 分类商品区 -->
				<view class="fenleiyeshop" v-if="rightmenu"  v-for="(item ,index)  in  rightmenu"   :key="index">
					<h2>{{item.name}}</h2>
					<ul class="fenleiyeshopul">
						<li v-for="(it,i) in item.children" @tap="shoplist(it.catId)" :key="i">
							<view style="width: 100%; height: 70px; background-color: #FF9933;">
								<img src="../../../static/category/R1.png" alt="">
							</view>
							<p>{{it.name}}</p>
						</li>
					</ul>
				</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	import maoyuguoji from "../components/page-header.vue"
	export default {

		components: {
			maoyuguoji
		},
		data() {
			return {
				width: Number,
				srollHeight: 300,
				leftmenu: null,
				rightmenu:null,
				allindex: 0,
				id: null,
			}
		},
		onLoad: function() {
			var self = this;
			uni.getSystemInfo({
				success: function(res) {
					console.log(res.windowWidth)
					var height = res.windowHeight - 50; //footerpannelheight为底部组件的高度
					var width = res.windowWidth - 128
					self.srollHeight = height
					self.width = width
					console.log(self.width)
				}
			});


			this.$request("product/api/type_list", {
				"level": "1",
			}, "post").then(res => {
				console.log(res)
				 this.leftmenu = res.list
				 this.leftmenu.forEach(item=>{
					let a=item.name.slice(0,5)
					item.name=a
				})
				
				this.$request("product/api/type_list", {
					"level": "2",
					"cid": "1"
				},"post").then(res=>{
					this.rightmenu=res.list
					console.log(res)
				})
				// console.log(res)
				
				
			})
		},
		methods: {
			leftmenuclick(index, id) {
				this.rightmenu=null
				this.allindex = index
				this.$request("product/api/type_list", {
					"level": "2",
					"cid": id
				},"post").then(res=>{
					this.rightmenu=res.list
					console.log(res)
				})
				
				// this.$request("api/product/api/type_list",{
				// 	"level":"2" ,
				// 	"parent_cid":id
				// },"post").then(res=>{
				// 	// this.leftmenu=res.list
				// 	res.list.forEach(item=>{
				// 		console.log(item.catId)
				// 		this.$request("api/product/api/type_list",{
				// 			"level":"3" ,
				// 			"parent_cid":item.catId
				// 		},"post").then(res=>{
				// 			// this.leftmenu=res.list
				// 			console.log(res)
				// 		})
				// 	})
				// 	console.log(res)
				// })
				// console.log(id)
				// console.log(index)
			},
			shoplist(id){
				uni.navigateTo({
					url: `/pages/shangpinliebiao/shangpinliebiao?id=${id}`
				});
				// console.log(id)
			}
		}
	}
</script>

<style>
	@import url("../../../common/css/style/category.css");
</style>
