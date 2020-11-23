<template>
	<view style="background-color: #F1F1F1;">
		<scroll-view scroll-y class="scroll-Y">
			<radio-group @change="radioChange">
				<view class="address-item" v-for="(item,index) in resslist " :key="index">
					<view class="address-user">
						<text class="size14">{{item.name}}</text>
						<text class="size14">{{item.phone}}</text>
					</view>
					<view class="address-dizhi">
						<text class="size12 huise">
							{{item.province}}-{{item.city}}-{{item.region}}-{{item.detailAddress}}
						</text>
					</view>
				
					<view class="address-select size14">
						<view>
							<radio :value="index" :checked="item.defaultStatus==1"></radio>
							<text>设为默认</text>
						</view>
						<view style="display: flex;"  @tap="goxiugai(item)">
							<view class="mix-icon icon-bianji"></view>
							<text class="huise">修改</text>
						</view>
						<view style="display: flex;" @tap="godelete(item.id,index)">
							<img  class="delectimg" src="../../static/icon_delete.png" alt="">
							<text class="huise">删除</text>
						</view>
					</view>
				</view>
<!-- 				<view class="address-item">
					<view class="address-user">
						<text class="size14">小李</text>
						<text class="size14">手机号</text>
					</view>
					<view class="address-dizhi">
						<text class="size12 huise">
							中国北京北京市东城区
						</text>
					</view>
				
					<view class="address-select size14">
						<view>
							<radio value="1"></radio>
							<text>设为默认</text>
						</view>
						<view style="display: flex;">
							<view class="mix-icon icon-bianji"></view>
							<text class="huise">修改</text>
						</view>
						<view style="display: flex;">
							<img  class="delectimg" src="../../static/icon_delete.png" alt="">
							<text class="huise">删除</text>
						</view>
					</view>
				</view> -->
					
			</radio-group>
		

		</scroll-view>
		
		<view class="addbottom size18" @tap="modify()">
			新增收货地址
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				 user:null,
				 resslist:[],
				 defaultStatus:null
			}
		},
		onLoad(){
			 this.user = uni.getStorageSync("user")
					 
		},
		onShow(){
			
			let id=this.user.id
			this.$request(`member/umsmemberreceiveaddress/${id}/addresses`,"get").then(res=>{
				this.resslist=res
				if(this.resslist.length<=0){
					this.defaultStatus=1	// console.log(6666)
				}else{
					this.defaultStatus=0
				}
				console.log(res)
			})
					
		},
		methods:{
			// 单选点击
			radioChange(value){
				let item=this.resslist[value.detail.value]
				console.log(item)
				console.log(value)
			},
			// 新增收货地址
			modify(){
                 let  a=this.defaultStatus
				uni.navigateTo({
				    url: `/pages/shouhuo/add?defaultStatus=${a}`
				});
			},
			goxiugai(item){
				let  data = JSON.stringify(item)
				uni.navigateTo({
				    url: `/pages/shouhuo/addup?arr=${data}`
				});
			},
			godelete(id,index){
				let arr=[]
				arr.push(id)
				console.log(arr)
				this.$request(`member/umsmemberreceiveaddress/delete/${id}`,{
				},"post").then(res=>{
					console.log(res)
				})
				this.resslist.splice(index, 1)
			}
			
		}
	}
</script>

<style>
	.scroll-Y {
		height: 800px;
		background-color: ;
	}

	.address-item {
		border: 1px solid #e2e2e2;
		padding: 20rpx;
		margin: 20rpx;
		box-shadow:2px 2px 5px darkgray;

	}

	.address-user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20rpx 0;

	}

	.address-dizhi {
		margin: 20rpx 0;
	}

	.address-select {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.delectimg{
		width: 32rpx;
		height: 32rpx;

	}
	.addbottom {
		background-color:#B72112 ;
		width: 100%;
		height: 100rpx;
	     position: fixed;
		bottom: 0;
		color: #FFFFFF;
		text-align: center;
		line-height: 100rpx;
		border: 1px solid rgba(7, 17, 27, 0.1);
		
	}
</style>
