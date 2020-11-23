<template>
	<view style="background-color: #F1F1F1; height: 100%;">
		<view class="nameitem">
			<view class="itemname">
				收货人
			</view>
		
			<input v-model="addname" placeholder="请输入收货人" class="itemipt huise size12" type="text">
		
		</view>
		<view class="nameitem">
			<view class="itemname">
				手机号：
			</view>
		
			<input v-model="addnum" placeholder="请输入手机号" class="itemipt huise size12" type="number">
		
		</view>
		<view class="nameitem">
			<view class="itemname">
				省/市/区：
			</view>
	       <AddressPicker @change="change" :level="3" class="resscity">{{planLocate}} </AddressPicker>
			<!-- <input v-model="addcity" placeholder="选择地区" class="itemipt huise size12" type="text"> -->
		
		</view>
		<view class="nameitem">
			<view class="itemname">
				详细地址
			</view>
		
			<input v-model="address" placeholder="请输入详细地址" class="itemipt huise size12" type="text">
		
		</view>
		<view class="namebottom" @tap="modify()">
			完成
		</view>
	</view>
</template>

<script>
	import AddressPicker from "../tabbar/components/lingdang-AddressPicker/AddressPicker.vue"
	export default {
		data(){
			return {
				user:null,
				addname:null,
				addnum:null,
				address:null,
				city:[],
				planLocate: "选择地址",
				defaultStatus:null
			}
		},
		components:{
			AddressPicker
		},
		onLoad(option){
			 this.user = uni.getStorageSync("user")
			 this.defaultStatus=option.defaultStatus
					 
		},
		methods:{
			modify(){
				this.$request("member/umsmemberreceiveaddress/save",{
					"memberId":this.user.id,
					"phone":this.addnum,
					"name":this.addname,
					"province":this.city[0],
					"city":this.city[1],
					"region":this.city[2],
					"detailAddress":this.address,
					"defaultStatus":this.defaultStatus
					
				},"post").then(res=>{
					uni.showToast({
						title: '增加成功!',
						mask: true,
						icon: 'success'
					})
					setTimeout(function(){
						uni.navigateBack()
					},500)
					
					// uni.navigateBack()
					console.log(res)
				})
				console.log(123123)
			},
			// 地址
			change(result) {
				// console.log(JSON.stringify(result.data));
				this.planLocate = '';
				result.data.forEach((item, index) => {
					if (index===0) {
						this.planLocate+=item.name
					} else {
						this.planLocate+='-'+item.name
					}
				});
				this.city= this.planLocate.split('-');
				// console.log(arr)
			}
		}
	}
</script>

<style>
	.itemipt {
		text-align: left;
		width: 70%;
		height: 100%;
		line-height: 80rpx;
	}
	
	.itemname {
		margin-left: 5%;
		width: 25%;
		height: 100%;
		line-height: 90rpx;
	}
	.nameitem>view {
		height: 100%;
	}
	
	.nameitem {
		display: flex;
		/* align-items: center; */
		/* margin-top: 40rpx; */
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		height: 90rpx;
		background-color: #FFFFFF;
	}
	.namebottom {
		background-color: #F7F7F7;
		width: 90%;
		height: 100rpx;
		margin: 0 5%;
		text-align: center;
		line-height: 100rpx;
		border: 1px solid rgba(7, 17, 27, 0.1);
		margin-top: 40rpx;
	}
	.resscity{
		line-height: 90rpx;
	}
</style>
