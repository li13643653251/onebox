<template>
	<view class="page">
		<van-tabs :active="active">
			<van-tab title="全部">
				<view class="shop size12">
					<view class="shoptitle">
						<view class="size14">
							2020/11/24 10:24:26
						</view>
						<view class="size14 red">
							待付款
						</view>
					</view>

					<view class="shopitem">
						<view class="shopitemimg">
							<image src="../../../static/category/R2.png"></image>
						</view>
						<view class="shopname">
							<view style="margin-top: 20rpx;">名字名字名字名字名字名字名字名字</view>
							<view class="huise">规格规格</view>
						</view>
						<view class="shopmoney">
							<view style="margin-top: 20rpx;">$55.5</view>
							<view class="huise">x1</view>
						</view>
					</view>
					<view class="allmoney size14" >
						<view class="allmoneytop">
							<view style="float: right; line-height: 50rpx;">
								共计<span>1</span>件 应付金额：<span class="red">$66.66</span>
							</view>

						</view>
						<view class="allmoneybuttom">
							<view class="alldelect">
								更多
							</view>
							<view class="gomoney">
								立即付款
							</view>
						</view>

					</view>
				</view>
			</van-tab>
			<van-tab title="待付款">
				<view class="shop size12">
					<view class="shoptitle">
						<view class="size14">
							2020/11/24 10:24:26
						</view>
						<view class="size14 red">
							待付款
						</view>
					</view>
				
					<view class="shopitem">
						<view class="shopitemimg">
							<image src="../../../static/category/R2.png"></image>
						</view>
						<view class="shopname">
							<view style="margin-top: 20rpx;">名字名字名字名字名字名字名字名字</view>
							<view class="huise">规格规格</view>
						</view>
						<view class="shopmoney">
							<view style="margin-top: 20rpx;">$55.5</view>
							<view class="huise">x1</view>
						</view>
					</view>
					<view class="allmoney size14" >
						<view class="allmoneytop">
							<view style="float: right; line-height: 50rpx;">
								共计<span>1</span>件 应付金额：<span class="red">$66.66</span>
							</view>
				
						</view>
						<view class="allmoneybuttom">
							<view class="alldelect">
								更多
							</view>
							<view class="gomoney">
								立即付款
							</view>
						</view>
				
					</view>
				</view>
			</van-tab>
			<van-tab title="待发货">待发货</van-tab>
			<van-tab title="待收货">待收货</van-tab>
			<van-tab title="待评论">待评论</van-tab>
			<van-tab title="已退款">已退款</van-tab>
		</van-tabs>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
		onLoad(e) {

		},
		onShow() {
			this.active = this.$store.state.type
		},
		methods: {

		},
		components: {

		}
	};
</script>

<style>
	.red{
		color: #C7604F;
	}
	page {
		width: 100%;
		height: 100%;
		background-color: #EFEFEF;
	}

	.gomoney {
		width: 20%;
		height: 50rpx;
		background-color: #BA2313;
		color: #FFFFFF;
		line-height: 50rpx;
		text-align: center;
		border-radius: 20rpx;
	}

	.allmoneybuttom {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.allmoneytop {
		width: 100%;
		height: 50rpx;
	}

	.allmoney {
		width: 100%;
		height: 100rpx;
		/* border-bottom: 1px solid darkgrey; */
	}

	.shop {
		padding: 10px;
		background-color: #FFFFFF;
	}

	.shoptitle {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #EEEEEE;
		line-height: 80rpx;
		display: flex;
		justify-content: space-between;
	}

	.shopitem {
		width: 100%;
		height: 200rpx;
		border-bottom: 1px solid #EEEEEE;
	}

	.shopitem {
		width: 100%;
		display: flex;
	}

	.shopitemimg {
		width: 30%;
		height: 200rpx;
	}

	.shopitemimg>image {
		width: 100%;
		height: 80%;
	}

	.shopname {
		width: 50%;
		height: 200rpx;
	}

	.shopmoney {
		text-align: center;
		/* float: right; */
		width: 20%;
		height: 200rpx;
	}
</style>
