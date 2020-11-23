<template>
	<view class="shoujibox">
		<view v-if="userInfo.mobile!=''">
			<view class="nameitem">
				<view class="itemname">
					原手机号：
				</view>

				<input :value="userInfo.mobile" class="itemipt" type="number">

			</view>
			<view class="nameitem">
				<view class="itemname">
					现手机号：
				</view>

				<input v-model="num" class="itemipt" type="number">

			</view>

		</view>
		<view v-else>
			<view class="nameitem">
				<view class="itemname">
					现手机号：
				</view>

				<input v-model="num" class="itemipt" type="number">

			</view>
		</view>




		<view class="namebottom" @tap="modify()">
			修改
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: null,
				num: null
			}
		},
		onLoad: function(option) {
			this.userInfo = uni.getStorageSync('user');


		},
		methods: {
			modify() {
				let that = this
				if (this.num.length!=11) {
					// alert("手机号码有误，请重填");
					
					uni.showToast({
						title: '手机号错误!',
						mask: true,
						icon: 'none'
					})
					return false;
				}else{
					// console.log(this.num.length)
					this.$request("member/api/register", {
						"id": that.userInfo.id,
						"mobile": that.num
					}, "post").then(res => {
						uni.showToast({
							title: '修改成功!',
							mask: true,
							icon: 'none'
						})
						that.userInfo.mobile = that.num
						uni.setStorageSync('user', that.userInfo);
						uni.navigateBack()
						// console.log(res)
					})
				}
			
			}
		}

	}
</script>

<style>
	.shoujibox {
		height: 100%;
		background-color: #F1F1F1;
	}

	.nameitem>view {
		height: 100%;
	}

	.nameitem {
		display: flex;
		/* align-items: center; */
		/* margin-top: 40rpx; */
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		height: 80rpx;
		background-color: #FFFFFF;
	}

	.namebottom {
		background-color: #F7F7F7;
		width: 90%;
		height: 60rpx;
		margin: 0 5%;
		text-align: center;
		line-height: 60rpx;
		border: 1px solid rgba(7, 17, 27, 0.1);
		margin-top: 20rpx;
	}

	.itemipt {
		text-align: left;
		width: 70%;
		height: 100%;
		line-height: 80rpx;
	}

	.itemname {
		width: 30%;
		height: 100%;
		line-height: 80rpx;
	}
</style>
