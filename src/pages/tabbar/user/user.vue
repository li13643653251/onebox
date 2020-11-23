<template>
	<view class="gerenyemianbox">
		<view class="gerenyemian">
			<!-- 头部角标 -->
			<view class="gerenyemiantop">
				<view class="mix-icon  icon-shezhi1" @tap="gerenxinxi()"></view>
				<view class="mix-icon  icon-shezhi1" style="float: right; margin-right: 10px;"></view>
				<view class="mix-icon  icon-yue" style="float: right; margin-right: 10px;"></view>
				<view style="clear:both;"></view>
			</view>
			<!-- 个人信息 -->
			<view class="grenxixin" v-if="userinfo">
				<!-- 头像 -->
				<view class="touxiang">
					<view class="touxiangimg">
						<img :src="userinfo.heardimg" alt="">
					</view>
					<!-- <img src="../../../static/category/R4.png" alt=""> -->
				</view>
				<!-- 信息 -->
				<view class="ziliao">

					<li style="display: flex;">
						<span class="name">{{userinfo.username}}</span>
						<view class="ziliaoimg ">
							<!-- <image url=""></image> -->
							<img src="../../../static/icon-address.png" alt="">
						</view>
						<span class="position">北京市</span>
					</li>
					<li>
						专属邀请码:<span>1316516516</span>
					</li>
					<li>
						推荐人:<span>阿泽</span>
					</li>

				</view>
				<!-- 二维码 -->
				<view class="erweima">
					<img src="../../../static/category/erweima.png" alt="">
				</view>
			</view>
			<view class="grenxixin" v-else>
				<!-- 头像 -->
				<view class="touxiang">
					<view class="touxiangimg">
						<img src="../../../static/category/R4.png" alt="">
						<!-- 	<img :src="userinfo.heardimg" alt=""> -->
					</view>
					<!-- <img src="../../../static/category/R4.png" alt=""> -->
				</view>
				<!-- 信息 -->
				<view class="ziliao">

					<li style="display: flex;">
						<span class="name">请登录</span>
						<view class="ziliaoimg ">
							<!-- <image url=""></image> -->
							<img src="../../../static/icon-address.png" alt="">
						</view>
						<span class="position">***</span>
					</li>
					<li>
						专属邀请码:<span>*****</span>
					</li>
					<li>
						推荐人:<span>***</span>
					</li>

				</view>
				<!-- 二维码 -->
				<view class="erweima">
					<img src="../../../static/category/erweima.png" alt="">
				</view>
			</view>
			<!-- 会员时间 -->
			<view class="huiyuanshijian">
				<view class="huiyuantime">
					<p>2020-04-01 会员到期</p>
					<p class="huiyuanvip">升级至尊vip</p>
				</view>
			</view>
		</view>
		<!-- 商城余额 -->
		<view class="shangchengyuerbox">
			<view class="shangchengyuer">
				<li>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
				</li>
				<li>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view>
				</li>
				<li>
					<view class="shangchengitem">
						<p style="line-height: 50px; color: #000000;">我的粉丝</p>
						<p style="font-size: 18px; color: #000000;">256</p>
					</view>
					<!-- 	<view class="shangchengitem">
						<p style="line-height: 50px;">0.01</p>
						<p>商城余额</p>
					</view> -->
					<view class="shangchengitem">
						<p style="line-height: 50px;">0</p>
						<p>今日新增</p>
					</view>
					<view class="shangchengitem">
						<p style="line-height: 50px;">0</p>
						<p>昨日新增</p>
					</view>
				</li>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="order-wrap">
			<view class="o-header row">
				<text class="tit">我的订单</text>
				<text class="more" @tap="allshop(0)">查看全部</text>
				<text class="mix-icon icon-you" style="font-size: 14px;"></text>
			</view>
			<view class="o-list">
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50" @tap="allshop(1)">
					<text class="mix-icon icon-daifukuan"></text>
					<text>待付款</text>

				</view>
				<view class="item center" hover-class="hover-gray"  :hover-stay-time="50" @tap="allshop(2)">
					<text class="mix-icon icon-daifahuo"></text>
					<text>待发货</text>

				</view>
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50" @tap="allshop(3)">
					<text class="mix-icon icon-yishouhuo"></text>
					<text>待收货</text>

				</view>
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50" @tap="allshop(4)">
					<text class="mix-icon icon-daipingjia"></text>
					<text>待评价</text>
				</view>
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50" @tap="allshop(5)">
					<text class="mix-icon icon-shouhoutuikuan"></text>
					<text>待退款</text>
				</view>
			</view>
		</view>


		<view class="order-wrap">
			<view class="o-header row">
				<text class="tit">我的服务</text>
				<text class="more">查看全部</text>
				<text class="mix-icon icon-you" style="font-size: 14px;"></text>
			</view>
			<view class="o-list">
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50" @tap="goress()">
					<text class="mix-icon icon-dizhi"></text>
					<text>地址</text>
				</view>
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<text class="mix-icon icon-daifukuan"></text>
					<text>红包</text>

				</view>
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<text class="mix-icon icon-pinglun-copy"></text>
					<text>客服</text>

				</view>
				<view class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<text class="mix-icon icon-share"></text>
					<text>待评价</text>
				</view>
			</view>
		</view>
		<!-- 	<view class="wodedingdan">
			<view class="wodedingdantitle">
				<p style="line-height: 30px; color: #000000;">我的订单</p>
			</view>
		</view> -->
	</view>
</template>

<script>
	import util from "../../../common/util/util.js"
	export default {
		data() {
			return {
				userinfo: {},
				key: false

			}
		},
		onShow: function() {
			// 判断是否登陆
			if (!util.onlogin()) {
				util.onlogin(true)
				this.userinfo = uni.getStorageSync("user")
				return false;
			}

			// this.key=true
			this.bindUserTap();
			
		},
		onLoad: function() {
			
             // console.log(this.$store.state.type)
			this.userinfo = uni.getStorageSync("user")
		},
		// 个人信息
		methods: {
			bindUserTap() {
				var that = this
				console.log(that)
			},
			gerenxinxi() {
				uni.navigateTo({
					url: `/pages/gerenxinxi/gerenxinxi`
				});
				console.log(123)
			},
			goress(){
				uni.navigateTo({
					url: `/pages/shouhuo/address`
				});
			},
			allshop(num){
				this.$store.commit('edit',num)
				uni.navigateTo({
				    url: `/pages/tabbar/cart/one`
				});
				// if(num==1){
				// 	// console.log(123)
				// }
			}
		}

	}
</script>

<style scoped="scoped">
	@import url("../../../common/css/style/user.css");

	uni-page {
		display: block;
		width: 100%;
		height: 80%;
	}

	.order-wrap {
		width: 700rpx;
		margin: 20rpx auto 0;
		background: #fff;
		border-radius: 10rpx;
	}

	.o-header {
		padding: 28rpx 20rpx 6rpx 26rpx;

	}

	.tit {
		flex: 1;
		font-size: 32rpx;
		color: #333;
		font-weight: 700;
	}

	.more {
		font-size: 24rpx;
		color: #999;
	}

	.icon-you {
		margin-left: 4rpx;
		font-size: 20rpx;
		color: #999;
	}

	.o-list {
		display: flex;
		justify-content: space-around;
		padding: 20rpx 0;
	}


	.item {
		flex-direction: column;
		width: 130rpx;
		height: 130rpx;
		border-radius: 8rpx;
		font-size: 24rpx;
		color: #606266;
		position: relative;



	}

	.mix-icon {
		font-size: 50rpx;
		margin-bottom: 20rpx;
		color: #fa436a;
	}

	.icon-shouhoutuikuan {
		font-size: 44rpx;
	}

	.number {
		position: absolute;
		right: 22rpx;
		top: 6rpx;
		min-width: 34rpx;
		height: 34rpx;
		line-height: 30rpx;
		text-align: center;
		padding: 0 8rpx;
		font-size: 18rpx;
		color: #fff;
		border: 2rpx solid #fff;
		background-color: $base-color;
		border-radius: 100rpx;
	}
</style>
