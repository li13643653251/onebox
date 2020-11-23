<template>
	<view class="ceshibox">
		<!-- 地址 -->
		<navigator class="address-section" v-if="address" >

			<view class="order-content">
				<text class="mix-icon icon-dizhi1"></text>
				<view class="cen">
					<view class="top">
						<text class="name">{{address[0].name}}</text>
						<text class="mobile">{{address[0].phone}}</text>
					</view>
					<text class="address">{{address[0].province}} {{address[0].city}}{{address[0].region}}</text>
				</view>
				<text class="mix-icon icon-you"></text>
			</view>
			<img style="height: 3px;" src="../../../static/1.png" alt="">
		</navigator>
           <view style="background-color: ;">
			   <scroll-view scroll-y="true" class="scroll-Y">
			   	<view class="listtop">
			   		<view class="mix-icon icon-bianji">
			   
			   		</view>
			   		<view>
			   			爱美蛙淘仓库
			   		</view>
			   	</view>
			   	<view class="listitem">
			   		<view class="item-list" v-for="(item,index) in itemlist.items"  :key="index">
			   			<view class="itemimg">
			   				<img :src="item.image" alt="">
			   			</view>
			   			<view class="itemname size14">
			   				<p class="size12">{{item.title}}</p>
			   				<p class="itemname-one" >
			   					<!-- {{item.items[i]}} -->
								{{item.skuAttr}}
			   				</p>
			   			</view>
			   			<view class="itemmoney">
			   				<p>${{item.price}}</p>
			   				<p class="itemname-one">
			   					x{{item.count}}
			   				</p>
			   			</view>
			   		</view>
	<!-- 		   		<view class="item-list">
			   			<view class="itemimg">
			   				<img src="../../../static/category/R3.png" alt="">
			   			</view>
			   			<view class="itemname size14">
			   				<p class="">库爱美蛙淘仓库爱美蛙淘仓库s爱美蛙淘仓库</p>
			   				<p class="itemname-one">
			   					规格
			   				</p>
			   			</view>
			   			<view class="itemmoney">
			   				<p>$66</p>
			   				<p class="itemname-one">
			   					x1
			   				</p>
			   			</view>
			   		</view> -->
	
			   	</view>
			   	<view class="item-bottom">
			   		<p>商品金额:</p>
			   		<p class="pick">￥{{shopmoney}}</p>
			   	</view>
			   	<view class="item-bottom">
			   		<p>运费订单：</p>
			   		<p class="pick">￥免运费</p>
			   	</view>
			   	<view class="item-bottom">
			   		<p>优惠卷：</p>
			   		<p class="pick">选择优惠卷></p>
			   	</view>
			   	<view class="item-bottom">
			   		<p>订单金额</p>
			   		<p class="pick"><span style="color: #000000;">共{{shopcount}}件商品</span>￥{{shopmoney}}</p>
			   	</view>
			   	<view class="item-bottom">
			   		<p>备注</p>
			   		<p class="">￥322.23</p>
			   	</view>
			   </scroll-view>
		   </view>
	      
		  <view class="ceshibuttom">
			 
			  <view class="quedingzhifu" @tap="gomoney()">
				  确定支付
			  </view>
			  <view style="line-height: 100rpx;">
			  	总价：<span style="color: red;">{{shopmoney}}</span>
			  </view>
		  </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 地址
				address:null,
				// 规格
				skuAttr:null,
				// 商品金额
				shopmoney:null,
				// 全部总价
				allmoney:null,
				// 商品数量
				shopcount:null,
				
				// 数据信息
               itemlist:null
			   
			}
		},
		onLoad(option) {
			uni.request({
			    url: 'https://bird.ioliu.cn/v1?url=www.panchaotian.com:1037/toTrade', 
			    data: {
			        weixinToken: uni.getStorageSync("token"),
					memberId:uni.getStorageSync("user").id
			    },
			    success: (res) => {
			        console.log(res);
					this.itemlist=res.data.data
				    this.address=res.data.data.address.filter(item=>{
						return item.defaultStatus===1
					})
					// this.skuAttr=res.data.data.items.skuAttr.f(item=>{
					// 	return item.defaultStatus===1
					// })
						this.getTotal(this.itemlist.items) 
					console.log( this.itemlist)
			        
			    }
			});
			// uni.request({
			// 	url:"www.panchaotian.com:1037/toTrade",
			// 	type:"get",
			// 	success:function(res){
			// 		console.log(res)
			// 	}
			// })
	
			//商品数据
			//let data = JSON.parse(option.data);
			//console.log(data);
		},
		methods: {
			// 计算总价
			 getTotal(list) {
			    let count = 0
			    let muney = 0
			    list.forEach(item => {
			     
			        count += item.count
			        muney += item.count * item.price
			    
			    })
				this.shopcount=count
				this.shopmoney=muney.toFixed(2)
				// console.log(this.shopmoney)
			  },
			
			gomoney(){
		uni.navigateTo({
			url: `/pages/tabbar/cart/one`
		});
				
				// uni.requestPayment({
				//     provider: 'wxpay',
				//     timeStamp: String(Date.now()),
				//     nonceStr: 'A1B2C3D4E5',
				//     package: 'prepay_id=wx20180101abcdefg',
				//     signType: 'MD5',
				//     paySign: '',
				//     success: function (res) {
				//         console.log('success:' + JSON.stringify(res));
				//     },
				//     fail: function (err) {
				//         console.log('fail:' + JSON.stringify(err));
				//     }
				// });
				
			}
			// //显示优惠券面板
			// toggleMask(type){
			// 	let timer = type === 'show' ? 10 : 300;
			// 	let	state = type === 'show' ? 1 : 0;
			// 	this.maskState = 2;
			// 	setTimeout(()=>{
			// 		this.maskState = state;
			// 	}, timer)
			// },
			// numberChange(data) {
			// 	this.number = data.number;
			// },
			// changePayType(type){
			// 	this.payType = type;
			// },
			// submit(){
			// 	// uni.redirectTo({
			// 	// 	url: '/pages/money/pay'
			// 	// })
			// },
			// stopPrevent(){}
		},
		computed:{
		
		}
	}
</script>

<style>
	.quedingzhifu{
        /* margin-top: 1%; */
		margin-right: 1%;
		width: 30%;
		height: 100%;
		background-color:#EE2A2C ;
		color: #FFFFFF;
		line-height:100rpx;
		text-align: center;
		border-radius: 10%;
		/* float: right; */
	}
	.ceshibuttom{
		display: flex;
		flex-direction:row-reverse;
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.ceshibox{
		width: 100%;
		height: 100%;
		background-color:#F0F0F0 ;
	}
	.pick{
		color: #D4707C;
	}
	.item-bottom {
		border-bottom:  1px solid #AEAEAE;
		width: 100%;
		height: 100rpx;
		line-height: 60rpx;
		/* line-height: 100rpx; */
		background-color: #FFFFFF;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		background-color: white;
		padding: 10px;
	}

	.itemname-one {

		/* height: 100%; */
		/* background-color: #F8F8F8; */
		/* display: flex; */
		color: #AEAEAE;
	}

	.itemmoney {
		text-align: center;
		width: 20%;
		height: 100%;
	}

	.itemname {
		flex-direction: column;
		display: flex;
		width: 60%;
		height: 100%;
	}

	.listitem {
		background-color: #FFFFFF;
	}

	.itemimg {
		width: 20%;
		height: 100%;
	}

	.item-list {
		padding: 10px;
		display: flex;
		height: 150rpx;
		border-bottom: 1px solid #AEAEAE;
	}

	.listtop {
		display: flex;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
	}

	.scroll-Y {
            /* height: 1000rpx; */
		height: 100%;
	}

	.address-section {

		height: 200rpx;
		background: #fff;
		position: relative;
	}

	.order-content {
		height: 180rpx;
		display: flex;
		align-items: center;
	}

	.icon-dizhi1 {

		width: 45px;
		color: #888;
		font-size: 22px;
	}

	.cen {
		display: flex;
		flex-direction: column;
		flex: 1;
		font-size: 28upx;
	}

	.name {
		font-size: 34upx;
		margin-right: 24upx;
	}

	.address {
		margin-top: 16upx;
		margin-right: 20upx;

	}

	.icon-you {
		font-size: 32upx;

		margin-right: 30upx;
	}
</style>
