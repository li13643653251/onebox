<template>
	<view class="content">
		<view class="contenttop">


			<swiper class="shouyelunbo" circular indicator-dots autoplay>
				<swiper-item v-for="(item,index) in swiperitem" :key="index">
					<img :src="item.imgUrl" alt="">
				</swiper-item>

			</swiper>

			<view class="money">
				<p>$55.5</p>
				<view class="yanseguige">
					<view class="leftimg">
						<img src="../../static/category/R5.png" alt="">
					</view>
					<view class="centertext">
						颜色规格
					</view>
					<view class="leftimg" v-for="(item,index) in skuInfoEntities" :key="index">
						<img :src="item.skuDefaultImg" alt="">
						<p class="size14">{{item.price}}/瓶</p>
					</view>
					<!-- <view class="leftimg">
						<img src="../../static/category/R5.png" alt="">
						<p>20g/瓶</p>
					</view> -->
				</view>
			</view>

			<view class="xiangqingyevip">
				<view class="mix-icon icon-shoujihaoma "></view>
				<view >现在升级尊v，最高可得佣金<span>50</span>元</view>
				<view class="mix-icon icon-you" style="float: right;"></view>
			</view>
			<view class="blacktext">
				<view class="mix-icon icon-shoujihaoma "></view>
				<view style="color: #FFFFFF;" class="size12">下单后三个工作日内发货</view>
			</view>
			<view class="shoptitle">
				<p>【双十一 狂欢季】Laneige 兰芝果冻夜间修护 睡眠唇膜韩国正品送迪迈诗隔离霜</p>
			</view>
		</view>

		<!-- 配送 -->
		<view class="peisong">

			<p class="size14"> 配 送 :  至</p>
			<!-- <p> -->
			<img src="../../static/icon-address.png" style="width: 40rpx; height: 40rpx; margin-top: 15px;" alt="">

			<!-- </p> -->
			<!--<img src="../../peisong/static/icon-address.png" alt="" style="width: 15px;">-->
			<p  class="size14"> 你的  </p>
		</view>
		<view class="bupeisong">
			<view  class="size12">
				不发货地区：内蒙古自治区，黑龙江省，海南省，西藏自治区，甘肃省，青海省，
				宁夏回族自治区，新疆维吾尔自治区，台湾省，香港特别行政区，澳门特别行政区
				
				</view>
		</view>
		<!-- 保障 -->
		<view class="baozhang">
			<view class="size14" @click="open('bottom')">保障: <span style="margin-left: 10%;">正品保障  ○全场包邮  ○买贵就赔  ○7天无理由 </span> <span class="mix-icon icon-you" style="float: right;"></span></view>
		</view>
		<!-- msak -->
		<amask :open="openPopup" :position="position" :background="background" :percent="percent" @close="unonpen">
			<view class="fuwubaozhang">
				<view class="fuwubaozhangtop">
					商品服务保障
				</view>
				<view class="fuwubaozhanglist">
					<view class="fwbzitem">
						<view class="size14">
							<span class="mix-icon icon-xuanzhong"></span>
							<span>
								正品保障
							</span>
						</view>
						<view class="fwbzbottom size12">
							<span class="huise">
								爱美蛙淘在平台所售的商品为“正品”
							</span>
						</view>
					</view>
					<view class="fwbzitem">
						<view class="size14">
							<span class="mix-icon icon-xuanzhong"></span>
							<span>
								全场包邮
							</span>
						</view>
						<view class="fwbzbottom size12">
							<span class="huise">
								爱美蛙淘支持全国包邮，无需承担邮费，港澳台和偏远地区（如新疆，西藏，内蒙古等）以及页面特殊说明的除外。
							</span>
						</view>
					</view>
					<view class="fwbzitem">
						<view class="size14">
							<span class="mix-icon icon-xuanzhong"></span>
							<span>
								买贵就赔
							</span>
						</view>
						<view class="fwbzbottom size12">
							<span class="huise">
								爱美蛙淘承诺，买贵双倍赔差价
							</span>
						</view>
					</view>
					<view class="fwbzitem">
						<view class="size14">
							<span class="mix-icon icon-xuanzhong"></span>
							<span>
								7天无理由退款
							</span>
						</view>
						<view class="fwbzbottom size12">
							<span class="huise">
								消费者在满足7天无理由退货申请条件的前提下，可以提出“7天无理由退货”的申请
							</span>
						</view>
					</view>
				</view>
			</view>
			<!-- <li v-for="(item,index) in baozhang" :key="index">{{item}}</li> -->


		</amask>
		<!-- 起售说明 -->
		<view class="qishoushuoming">
			<view class="size14">起售说明：</view>
			<view class="size14">本件商品<span>1</span>件起售</view>
		</view>
		
		<!-- 商品评价 -->
		<view class="pingjia">
			<view class="pingjiatitle">
				<p class="size14">商品评价：</p>
				<p style="color:#612335 ;">好评<span>1</span>% <span class="mix-icon icon-you"></span></p>
			</view>
			<scroll-view scroll-x="true">
				<view class="pingjiaitem">
		<!-- 			<view class="itemimg">
						<view style="display: flex; ">
							<img style="width: 30px; height: 30px;" src="../../static/category/R2.png" alt="">
							<p style="line-height: 30px;">名称名称名称</p>
						</view>
						<view>
							<span>
								好评好评好好评好评好评好评好评好评好评好评好评好评好评好好评好评好好评好评
							</span>
						</view>
					</view>
					<view class="itemimg">
						<view style="display: flex; ">
							<img style="width: 30px; height: 30px;" src="../../static/category/R2.png" alt="">
							<p style="line-height: 30px;">名称名称名称</p>
						</view>
						<view>
							<span>
								好评好评好好评好评好评好评好评好评好评好评好评好评好评好好评好评
							</span>
						</view>
					</view>
					<view class="itemimg">
						<view style="display: flex; ">
							<img style="width: 30px; height: 30px;" src="../../static/category/R2.png" alt="">
							<p style="line-height: 30px;">名称名称名称</p>
						</view>
						<view>
							<span>
								好评好评好好评好评好评好评好评好评好评好评好评好评好评好好评好评好好评好评好评
							</span>
						</view>
					</view> -->

					<div style="clear: both;"></div>
				</view>
			</scroll-view>

		</view>
		<!-- <button @click="openshop('bottom')">按钮</button> -->
		<!-- 为你推荐 -->
		<view class="tuijian">
		   <view class="tuijiantitle">○ 为你推荐 ○</view>
		   <image style="width: 100%;" v-for="(item,index) in spuInfoDescEntities" :src="item" alt="" :key="index">
		<!-- 	<view class="tuijianimg" v-if="spuInfoDescEntities">
				<img v-for="(item,index) in spuInfoDescEntities" :src="item" alt="" :key="index">
			</view> -->
		</view>
		<!-- 规格布局 -->
		<amask :open="keyshop" :position="position" :background="background" :percent="percent" @close="unonpenshop">
			<view class="sku-box">
				<view class="sku-header container" v-if="skuSaleAttrValue">
					<image class="goods-img" :src="xuanzhongshop[0].skuDefaultImg"></image>

					<view class="sku-goods-info">
						<view class="money">
							<text class="symbol fs-26" style="color:#E57067 ;">商城价：</text>
							
							<text class="amount fs-38"  style="color:#E57067 ;"> ￥{{xuanzhongshop[0].price}} </text>
							
						</view>
						<view>
							<text>已选择</text>
						</view>
						<view class="stock fs-24">
							90库存件
						</view>
						<view class="fs-24">

						</view>
					</view>
				</view>
				<scroll-view class="sku-list" scroll-y="true">
					<view class="sku-item container" v-for="(item,index) in skuSaleAttrValue" :key="index">
						<view class="sku-name">{{item.name}}</view>
						<view class="sku-content">
							<text class="sku-content-item" v-for="(it,i) in item.values" :key="i" :class="{'activeshop':item.setindex==i }"
							 @click="checkshop(index,i,item,it)">{{it.value}}</text>
						</view>
					</view>
				</scroll-view>
				<view class="sku-item container count">
					<view class="sku-name">数量</view>
					<view class="count-box">
						<text class="minus" @click="handleBuyCount('main')">-</text>
						<input class="count-content" v-model="shopnum">
						<text class="add" @click="handleBuyCount('add')">+</text>
					</view>
				</view>
				<view class="confirm-btn container" @click="lijigoumai()">立即购买</view>
			</view>
		</amask>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
			<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickButton" />
			<van-goods-action-button text="加入购物车" type="warning" @click="onClickIcon"/>
			<van-goods-action-button text="立即购买" @click="onClickButton"/>
		</van-goods-action>
	</view>
</template>

<script>
	import amask from "../tabbar/components/YYT-popup.vue" //弹出层
	export default {
		components: {
			amask,
			
		},
		data() {
			return {
				baozhang:["正品保障","全场包邮","买贵就赔","7天无理由"],
				isActive: false,
				shopindex: 0,
				title: 'Hello',
				id: Number,
				openPopup: false,
				position: '',
				background: '#fff',
				percent: 0,
				// 规格
				keyshop: false,

				// 商品信息
				skuInfoEntities: null,

				// 商品轮播图
				swiperitem: null,
				// 详情页底部图片 用，分隔开
				spuInfoDescEntities: null,
				// 规格
				skuSaleAttrValue: null,
				xuanzhongshop: null,
				shopnum: 1


			}
		},
		onShow: function() {

		},
		onLoad: function(option) {
			uni.showToast({
				title: '加载中',
				icon: "loading",
				duration: 500
			}); //option为object类型，会序列化上个页面传递的参数
			this.id = option.id
			this.shopdata()

		},
		methods: {
			// 加入购物车
			lijigoumai(){
				var q=uni.getStorageSync('token')
				console.log(q)
				
				uni.switchTab({
					url: "/pages/tabbar/cart/cart"
				});
				// uni.request({
				// 	url:"https://bird.ioliu.cn/v1?url=http://www.panchaotian.com:1035/addTocart",
				// 	data:{
				// 		"weixinToken":uni.getStorageSync("token"),
				// 		"memberId":q.id,
				// 		"skuId":this.xuanzhongshop[0].skuId,
				// 	    "num":this.shopnum
							
				// 	},
				// 	success(res){
				// 		console.log(res)
				// 	}
				// })
				// this.$request("addTocart",{
				// 	"skuId":this.xuanzhongshop[0].skuId,
				// 	"num":this.shopnum,
				// 	"weixinToken":20201116
				// },"get").then(res=>{
				// 	console.log(res)
				// })
				
			},
			handleBuyCount(type) {
				if (type === "main") {
					if (this.shopnum <= 1) {
						return this.shopnum = 1
					} else {
						this.shopnum--
					}
				} else if (type === "add") {
					this.shopnum++
				}
			},
			checkshop(index, i, item, it) {
				this.skuSaleAttrValue[index].setindex = i
				let arr = []
				this.skuSaleAttrValue.forEach(item => {
					item.values.forEach((it, index) => {
						if (item.setindex == index) {
							arr.push(item.values[index])
						}
					})

				})
				this.addgwc(arr[0], arr[1])

			},
			addgwc(a, b) {
				let c = a.sku_id.filter(function(v) {
					return b.sku_id.indexOf(v) > -1
				})
				this.xuanzhongshop = this.skuInfoEntities.filter(function(item, index) {
					return item.skuId == c
				})
			},
			handleClose() {
				this.popupShow = false
			},
			handleConfirm(obj) {
				console.log(obj)
				this.popupShow = false
			},

			shopdata() {
				this.$request("product/api/sku_info", {
					"spu_id": this.id
				}, "post").then(res => {
					console.log(res, 111111)
					this.swiperitem = res.spuImagesEntities //轮播图
					this.spuInfoDescEntities = res.spuInfoDescEntities[0].decript.split(",") //详情图
					console.log(this.spuInfoDescEntities)
					this.skuSaleAttrValue = res.skuAttrResps //规格
					this.skuInfoEntities = res.skuInfoEntities //颜色规格
					let that = this
					this.skuSaleAttrValue.forEach(item => {
						that.$set(item, "setindex", 0)
					})
					this.addgwc(this.skuSaleAttrValue[0].values[0], this.skuSaleAttrValue[1].values[0])
				})
			},
			open(position) {
				this.position = position;
				this.openPopup = true;
			},
			unonpen() {
				this.openPopup = false;
			},
			openshop(position) {
				this.position = position;
				this.keyshop = true;
			},
			unonpenshop() {
				this.keyshop = false
			},
			onClickIcon() {
				this.openshop('bottom')
				console.log('点击图标')
				// this.popupShow = true
				// console.log('1')
				// Toast('点击图标');
			},
			onClickButton() {
				console.log('点击按钮')
				// Toast('点击按钮');
			}
		},

	}
</script>

<style lang="scss" scoped>
	.fwbzbottom{
		margin-top: 50rpx;
	}
	.fwbzitem{
		width: 100%;
		padding: 30rpx;
		border-bottom: 1px solid #E7E7E7;
	}
	.fuwubaozhangtop{
		margin-bottom: 80rpx;
		width: 100%;
		font-size: 18px;
		margin-top: 20rpx;
		text-align: center;
	}
	.fuwubaozhang{
		width: 100%;
		height: 1000rpx;
	}
	image{
		width: 100%;
		height: 100%;
	}
	.activeshop {
		color: white;
		background-color: #FD6852;
		border: 1px solid black;
	}

	.tuijianimg {
		margin-top: 20rpx;
	}
	.tuijiantitle>image{
		// width: 100%;
		// height: 300px;
	}

	.tuijiantitle {
		font-weight: 500;
		color: #000000;
		margin-bottom: 60rpx;
		font-size: 50rpx;
		text-align: center;
	}

	.tuijian {
		margin-top: 100rpx;
		width: 100%;
		height: 1000rpx;
	}

	.pingjiaitem {
		width: 200%;
		/* display: flex; */
	}

	.itemimg {
		display: inline-block;
		/* float: left; */
		width: 100px;
	}

	.pingjia {
		width: 100%;
		background-color: #FEFEFE;
	}

	.pingjiatitle {
		margin-top: 20rpx;
		height: 80rpx;
		display: flex;

		justify-content: space-between;
		flex-wrap: wrap;

	}

	.pingjiatitle>p {
		line-height: 80rpx;
	}

	.qishoushuoming {
		height: 60rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #FEFEFE;

	}
	.qishoushuoming>view{
		line-height: 60rpx;
	}

	.baozhang {
		margin: 10px 0;
		height: 50rpx;
		background-color: #FEFEFE;
	}

	.baozhang>view {
		line-height: 50rpx;
	}

	.bupeisong {
		margin-top: 5rpx;
		width: 100%;
        height: 150rpx;
		background-color: #FEFEFE;
	}
	.bupeisong>view{
		width: 50%;
		margin-top: 10px;
		margin: 0 auto;
		
	}

	.peisong>p {
		line-height: 100rpx;
	}

	.peisong {
		display: flex;
		margin-top: 20px;
		width: 100%;
		height: 100rpx;
		background-color: #FEFEFE;
	}

	.shouyelunbo {

		width: 100%;
		height: 400px;
	}

	.contenttop {
		background-color: #FEFEFE;
	}

	/* 	.shouyelunboitem {
		width: 100%;
		height: 200px;
		background-color: #F3C6C1;
	} */
	.content {
		width: 100%;
		height: 1000px;
		background-color: #F1F1F1;

	}

	.xiangqingyevip {
		margin-top: 40rpx;
		width: 100%;
		height: 120rpx;
		background-color: #FFF0D3;
	}

	.xiangqingyevip>view {
		font-size: 15px;
		float: left;
		text-align: center;
		line-height: 120rpx;
		color: #000000;
	}

	.title {
		background-color: #FEFEFE;
		font-size: 36rpx;
		color: #8f8f94;
	}

	.money {
		background-color: #FEFEFE;
		width: 100%;
	}

	.money>p {
		color: red;
		font-size: 60rpx;
	}

	.yanseguige {
		width: 100%;
		display: flex;
	}

	.leftimg {
		width: 100rpx;
		height: 150rpx;
		/* border: 1px solid black; */
	}

	.leftimg>img {
		width: 100%;
		height: 70%;
	}

	.centertext {
		color: #686868;
		width: 80rpx;
		margin-left: 100rpx;

	}

	.blacktext {

		margin-top: 40rpx;
        height: 50rpx;
		width: 100%;
		background-color: black;
		display: flex;
	}

	.blacktext>view{
		color: #FFFFFF;
		line-height: 50rpx;
	}

	.mix-icon {
		margin-top: 4rpx;
		height: 100%;
	}

	.shoptitle {
		width: 100%;
		height: 150rpx;
	}

	.shoptitle>p {
		margin-top: 30rpx;
		font-weight: 700;
		color: black;
	}


	/* 规格 */
	.flex-center {
		display: flex;
		align-items: center;
	}

	.flex-center-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	$font-color-light: #999999;
	$page-bg-color-grey: #f5f5f5;

	.fs-24 {
		font-size: 24upx;
	}

	.fs-26 {
		font-size: 26upx;
	}

	.fs-38 {
		font-size: 38upx;
	}

	.container {
		width: 690upx;
		margin: 0 auto;
	}

	.sku-box {
		min-height: 500upx;
		background-color: white;
		padding-bottom: 20upx;
		font-size: 28upx;
		color: #333333;

		.sku-header {
			display: flex;
			padding: 40upx 0 20upx;

			.goods-img {
				width: 200upx;
				height: 200upx;
				border-radius: 6upx;
				border: 4upx solid white;
				flex: none;
				// margin-top: -80upx;
			}
		}

		.sku-goods-info {
			margin-left: 20upx;

			.money {
				border: none;
				padding-bottom: 0;
			}

			.stock {
				color: $font-color-light;
			}
		}

		.sku-list {
			max-height: 500upx;
		}

		.sku-item {
			padding: 30upx 0;

			.sku-name {
				font-size: 30upx;
			}

			.sku-content {
				border-bottom: 2upx solid $page-bg-color-grey;
				padding: 20upx 0;
				@extend .flex-center;
				flex-wrap: wrap;

				.sku-content-item {
					padding: 16upx 20upx;
					border-radius: 6upx;
					margin: 0 30upx 20upx 0;
					border: 2upx solid transparent;
				}
			}

			&.count {
				@extend .flex-center;
				justify-content: space-between;

				.count-box {
					@extend .flex-center;

					text,
					.count-content {
						@extend .flex-center-center;
						width: 70upx;
						height: 70upx;
						font-size: 32upx;
						border: 2upx solid $page-bg-color-grey;
					}

					.add,
					.minus {
						font-size: 44upx;
					}

					.count-content {
						border-width: 2upx 0;
						text-align: center;
					}
				}
			}
		}

		.confirm-btn {
			@extend .flex-center-center;
			height: 80upx;
			border-radius: 80upx;
			background-color: #FA4742;
			color: white;
			font-size: 32upx;
			margin-top: 10upx;
		}
	}

	[class*=disabled] {
		color: $font-color-light;
		opacity: .7;
	}
</style>
