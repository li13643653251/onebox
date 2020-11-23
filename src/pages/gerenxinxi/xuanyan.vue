<template>
	<view class="namebox">
		<view class="nametop">
			我的宣言
		</view>
		<view class="huise">不能超过50个字哦~</view>
		<view class="nameitem">
			<!-- <view class="itemname">
				用户名
			</view> -->
		
			<input v-model="userInfo.sign" class="itemipt" type="text">
			
		</view>
		<view class="namebottom" @tap="modify()">
			修改
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return  {
				userInfo:null
			}
		},
		onLoad:function(option){
			this.userInfo = uni.getStorageSync('user');
			
		},
		methods:{
			modify(){
				let that=this
				this.$request("member/api/register",{
					"id":that.userInfo.id,
					"sign":that.userInfo.sign
				},"post").then(res=>{
					uni.setStorageSync('user', that.userInfo);
					uni.navigateBack()
					
				})
			}
		}
	}
</script>

<style>
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
	.itemipt{
		text-align: left;
		width: 100%;
		height: 100rpx;
	     line-height: 80rpx;
	}
	.itemname{
		width: 30%;
		height: 100%;
		line-height: 80rpx;
	}
	.nameitem>view{
		height: 100%;
	}
	.nameitem{
		display: flex;
		/* align-items: center; */
		margin-top: 40rpx;
		height:120rpx;
		background-color: #FFFFFF;
	}
	.nametop{
		height: 150rpx;
		line-height: 150rpx;
		font-weight: 500;
		font-size: 28px;
	}
	view{
		width: 100%;
		text-align: center;
	}
	.namebox{
		height: 100%;
		background-color: #F1F1F1;
	}
	
</style>
