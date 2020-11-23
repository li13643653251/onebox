<template>
	<view class="homebigbox">
		<!-- <vantag type="info">11</vantag> -->
		<!-- <van-button type="info">12121212</van-button> -->
         <!-- <vantbutton  >123</vantbutton> -->
		<maoyuguoji :width='width'></maoyuguoji>
		<!--点击搜索跳转到搜索页 -->
		<!--<view class="Mengxiangzhichengbo">
			<view class="mix-icon  icon-sousuo">
			</view>
			<view class="toptext">
				请输入要搜索的商品
			</view>
		    </view> -->
		<!--轮播图 -->
		<swiper class="shouyelunbo" circular indicator-dots autoplay>
			<swiper-item>
				<img src="../../../static/home/1.jpg" alt="">
				<!--<view class="shouyelunboitem" style="background-color: #CCFF33;"></view>-->
			</swiper-item>
			<swiper-item>
				<img src="../../../static/home/2.jpg" alt="">
				<!-- <view class="shouyelunboitem" style="background-color: #99FFFF;"></view> -->
			</swiper-item>
			<swiper-item>
				<img src="../../../static/home/3.jpg" alt="">
				<!-- <view class="shouyelunboitem" style="background-color: #99FF00;"></view> -->
			</swiper-item>
			<swiper-item>
				<img src="../../../static/home/4.jpg" alt="">
				<!-- <view class="shouyelunboitem" style="background-color: #00FFFF;"></view> -->
			</swiper-item>
			<swiper-item>
				<img src="../../../static/home/5.jpg" alt="">
				<!-- <view class="shouyelunboitem" style="background-color: #FF7744;"></view> -->
			</swiper-item>
		</swiper>
		<!-- 商品介绍区 -->
		<view class="lunbocount">
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				蛙套精选
			</view>
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				产地直供
			</view>
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				正品保障
			</view>
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				平台售后
			</view>
		</view>
		<!-- 金刚区 -->
		<view class="shouyefenlei">
			<view class="shouyefenleiitem" v-for="(item,index) in fivelist"  :key="index">
				<view class="shouyefenleiimg">
					<img :src="item.imgUrl" alt="">
				</view>
				<view class="shouyefenleitext">
					<text style="color: #515151; " class="size14 huise">{{item.spuName}}</text>
				</view>
			</view>
			<!-- 	<view class="shouyefenleiitem">
				<view class="shouyefenleiimg">
					<img src="../../../static/home/five.jpg" alt="">
				</view>
				<view class="shouyefenleitext">
					<text style="color: #515151;">美妆个护</text>
				</view>
			</view>
			<view class="shouyefenleiitem">
				<view class="shouyefenleiimg">
					<img src="../../../static/home/five.jpg" alt="">
				</view>
				<view class="shouyefenleitext">
					<text style="color: #515151;">家具生活</text>
				</view>
			</view>
			<view class="shouyefenleiitem">
				<view class="shouyefenleiimg">
					<img src="../../../static/home/five.jpg" alt="">
				</view>
				<view class="shouyefenleitext">
					<text style="color: #515151;">智能电器</text>
				</view>
			</view>
			<view class="shouyefenleiitem">
				<view class="shouyefenleiimg">
					<img src="../../../static/home/five.jpg" alt="">
				</view>
				<view class="shouyefenleitext">
					<text style="color: #515151;">户外运动</text>
				</view>
			</view> -->
			<view class="qingchufudong"></view>
		</view>
		<view class="shouyecainixihuan">
			<view class="cainixihuantext size18">猜你喜欢</view>
			<view class="xihuanshangpin">
				<!-- 每个商品 -->
				<view class="lickitem" v-for="(item,index) in lickshop" :key="index">
					<view class="lickitemimg" @click="xiangqing(item.brandId)">
						<img style="width: 100%;" :src="item.imgUrl" alt="">
					</view>
					<view>
						<p class="lickshoptext">
							<span>【双十一狂欢季】</span>
							{{item.spuDescription}}
						</p>
						<view class="lickshopmoney">
							<p>
								<span class="nowmoney size16">${{item.price}}</span>
								<span class="oldmoney size12">￥222</span>
							</p>
							<p id="licksales">销量: <span>2</span></p>
							<view style="clear: both;"></view>
						</view>
						<view class="lickshopbottom">
							<view class="homefan ">
								<p class="size12" style="color: #FFFFFF;">尊v自购返</p>
								<p class="size12">￥5.55</p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import {getbanner} from "../../../network/request/home.js"
	
	// import vantag from '../../../wxcomponents/vant/dist/button/index';
	import {
		mapState
	} from "vuex"
	import maoyuguoji from "../components/page-header.vue"
	export default {
		components: {
			maoyuguoji
			// vantag
		},
		data() {
			return {
				num: 1,
				width: Number,
				fivelist: null,
				lickshop:null
			}
		},
		onLoad: function() {
			this.onfivelist()
			this.youlick()
			// 动态获取用户手机的宽度
			var self = this;
			uni.getSystemInfo({
				success: function(res) {
					var width = res.windowWidth - 15
					self.width = width
				}
			});
			
			
		},
		//下拉事件
		onReachBottom() {
			console.log(12313)
			uni.showToast({
				title: '目前暂无商品',
				icon: "loading",
				duration: 1000
			});
			// uni.stopPullDownRefresh();
		},
		onShow: function() {
			// https://bird.ioliu.cn/v1?url= 第三方接口代理跨域
			// uni.request({
			// 	url: 'http://www.pa+nchaotian.com:1023/api/product/type_list',
			// 	// method: 'POST',
			// 	data: {
			// 		"level": "3",
			// 		"parent_cid": "1436"
			// 	},
			// 	success: (res) => {
			// 		console.log(res);
			// 	}
			// });
			// uni.request({
			// 	url: `http://www.panchaotian.com:1026/api/product/api/list`,
			// 	// method: 'POST',
			// 	// data: {
			// 	// 	"level": "2",
			// 	// 	"parent_cid": "22"
			// 	// },
			// 	success: function(res) {
			// 		console.log(res)
			// 	}
			// })
			// console.log("请求数据")
		},
	
		// mounted() {
		// 	console.log(123123)
		// },
		methods: {
			// 五个列表数据
			onfivelist(){
				
				this.$request("product/api/list", {}).then(res => {
					this.fivelist = res.spuResps
					this.fivelist.forEach(item => {
						console.log(item)
						let a = item.spuName.slice(0, 3)
						item.spuName = a
					})
				})
			},
			tobar(e) {
				console.log(66666)
			},
			xiangqing(num) {
				console.log(uni)
				uni.navigateTo({
					url: `/pages/xiangqingye/xiangqingye?id=${num}`
				});
				console.log(123)
			},
			// 猜你喜欢
			youlick(){
				this.$request("product/api/list", {}).then(res => {
				this.lickshop = res.spuResps
				})
				
			}
		},
		computed: {
			...mapState(['avatarUrl', 'login', 'userName'])
		}

	}
</script>

<style>
	@import url("../../../common/css/style/home.css");
</style>
