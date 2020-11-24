<template>
	<view>
		<scroll-view scroll-y class="scroll-Y" v-if="alllist!=null">
			<view class="good-item" v-for="(item,index) in alllist" :key="index">
				<view class="good-select">
					<checkbox :checked="item.check" @tap="bindChecked" :data-index="index" :data-check="item.check">
					</checkbox>


					<img :src="item.image" class="good-pic" alt="">
				</view>
				<view class="good-dis">
					<view class="good-dis-item">
						<text class="good-name">
							{{item.title}}
						</text>
						<img src="../../../static/icon_delete.png" class="good-remove" @click="deleteshop(index)" alt="">
					</view>
					<view class="good-dis-item">
						<view class="guige size12" style="color: #AEAEAE;"><text class=" size12">{{item.skuAttr[0]}} {{item.skuAttr[1]}}</text></view>
						<text>${{item.price}}</text>
						<view class="num-contor">
							<text class="sub" @click="shopnum('sub',item)">-</text>
							<text class="num">{{item.count}}</text>
							<text class="add" @click="shopnum('add',item)">+</text>
						</view>
						<!-- <text>规格规格</text> -->
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="bottom-bar">
			<view>
				<checkbox class="checkbox" :checked="allcheck" :data-check="allcheck" @tap="bindAllChecked"></checkbox>
				<!-- <checkbox class="checkbox"  v-else></checkbox> -->
				<text class="checkNum">全选({{count}})</text>
				<text>${{money}}</text>
			</view>
			<view>
				<button @tap="gojiesuan()">去结算</button>
			</view>
		</view>
	</view>
</template>
<script>
	import util from "../../../common/util/util.js"
	export default {
		data() {
			return {
				alllist: null,
				// 全选
				allcheck: true,
				// 选中的数量
				count:0,
				// 选中的价格
				money:0,
				user:null
					
			}
		},
		onShow: function() {
			// this.$request("currentUserCartItems",{
			//  "weixinToken":20201116
			// },"get").then(res=>{
			//  console.log(res)
			// })
             this.user=uni.getStorageSync("user")
			// 判断是否登陆
			if(!util.onlogin()){
				util.onlogin(true)
				 console.log( typeof uni.getStorageSync("user").id)
				 // uni.request({
					//  url:'http://e1b5acf89a37.ngrok.io/currentUserCartItems',
					//  data:{
					// 	 "weixinToken":uni.getStorageSync("token"),
					// 	 "memberId":uni.getStorageSync("user").id
					//  },
					//  success:(res)=>{
					// 	 console.log(res)
					//  }
					 
					 
				 // })
				this.$request("currentUserCartItems", {
					"weixinToken":uni.getStorageSync("token"),
					"memberId":this.user.id
				}, "get").then(res => {
					  console.log(res)
					this.alllist = res
					  this.getTotal(this.alllist)
					console.log(this.alllist)
				})
			}
			

		},
		onLoad: function() {
		
		},
		methods: {
			// 计算总价
			 getTotal(list) {
			    let count = 0
			    let muney = 0
			    list.forEach(item => {
			      if (item.check) {
			        count += item.count
			        muney += item.count * item.price
			      }
			    })
				this.count=count
				this.money=muney.toFixed(2)
			  },
			// 购物车加减操作
			shopnum(type, item) {
				let id = item.skuId
				if (type == "add") {
					item.count++
				} else if (type == "sub") {
					if (item.count <= 1) {
						return item.count = 1
					} else {
						item.count--
					}
					
				}
				this.shopnumajax(id, item.count)
				  this.getTotal(this.alllist)
			},
			// 加减请求封装
			shopnumajax(id, num) {
				this.$request("countItem", {
					"weixinToken":uni.getStorageSync("token"),
					"memberId":this.user.id,
					"skuId": id,
					"num": num
				}, "get").then(res => {
					console.log(res)
				})
			},
			// 删除购物车
			deleteshop(index) {
				let id = this.alllist[index].skuId
				console.log(id)
				
				console.log(this.alllist[index].skuId)
				this.$request("deleteItem", {
					"weixinToken":uni.getStorageSync("token"),
					"memberId":this.user.id,
					"skuId":id
					
				}, "get").then(res => {
					uni.showToast({
						title: '删除商品成功',
						mask: true,
						icon: 'none'
					})
					console.log(res)
				})
				this.alllist.splice(index, 1)
				  this.getTotal(this.alllist)
			},
			  //全选按钮
			  bindAllChecked(e) {
			    let flag =!e.currentTarget.dataset.check
			    this.alllist.forEach(item => {
			      item.check = flag
			    })		
				this.allcheck=flag
				 this.getTotal(this.alllist)
			  },
			//单选按钮
			bindChecked(e) {
				let {
					index,
					check
				} = e.currentTarget.dataset
				this.alllist[index].check = !check
				this.allcheck=this.isCheckAll(this.alllist)
				 this.getTotal(this.alllist)
			},

			//判断是否全选
			isCheckAll(list) {
				let flag
				if (!list.length) {
					flag = false
				} else {
					flag = list.every(item => item.check)
				}
				return flag
			},
			gojiesuan(){
				console.log(123123)
				uni.navigateTo({
					url: `/pages/tabbar/cart/ceshi`
				});
			}
		}

	}
</script>

<style scoped>
	.guige {
		position: absolute;
		top: -40rpx;
	}

	uni-button {
		padding: 0;
		margin: 0;
		background-color: rgba(0, 0, 0, 0);
	}

	button {
		width: 210rpx;
		background: #ec5990 !important;
		color: #FFFFFF;
		font-size: 29rpx;
		font-weight: 500;
		height: 100%;
		padding: 0;
		line-height: 100rpx;
		border-radius: 0;

	}

	.checkNum {
		margin-right: 30rpx;

	}

	.bottom-bar {
		width: 100%;
		position: fixed;
		bottom:0;
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		justify-content: space-between;
		font-size: 29rpx;

	}

	/* 	*{
		color:#ec5990 ;
	} */
	.num-contor {
		display: inline-block;
		width: 210rpx;
		height: 60rpx;
		line-height: 60rpx;
		border: 1px solid #cccccc;
		text-align: center;
	}

	.sub {
		box-sizing: border-box;
		display: inline-block;
		width: 30%;
		border-right: 1px solid #cccccc;
	}

	.num {
		display: inline-block;
		width: 40%;
	}

	.add {
		box-sizing: border-box;
		display: inline-block;
		width: 30%;
		border-left: 1px solid #cccccc;
	}

	img {
		width: 320px;
		height: 240px;
		display: inline-block;
		overflow: hidden;

	}

	.good-remove {
		width: 36rpx;
		height: 36rpx;

	}

	.good-name {
		width: 250rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	text {
		cursor: text;


	}

	.good-dis-item {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.good-pic {
		width: 160rpx;
		height: 160rpx;
	}

	checkbox {
		transform: scale(.7);

	}

	/* compontents/numControl/numControl.wxss */

	.scroll-Y {
		height: 500px;
	}

	.good-item {
		display: flex;
		padding: 20rpx 0;
		border: 1px solid #f4f4f4;

	}

	.good-select {
		display: flex;
		align-items: center;

	}

	.good-dis {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 30rpx;
		padding: 10rpx 0 15rpx;
		margin: 0 40rpx 0 20rpx;

	}

	/* pages/cart/cart.wxss */
</style>
