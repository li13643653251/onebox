<template>
     

	<view class="Mengxiangzhichengbo" :style="{width:width+`px`}" @click="tobar()">
		<view class="mix-icon  icon-sousuo">
	         
		</view>
		
			<view class="toptext  size16">
				请输入要搜索的商品
			</view>
	</view>
</template>

<script>
	export default {
		props:["width"],
			
		methods:{
			tobar(){
				// uni.showToast({
				//     title: '标题',
				//     duration: 2000
				// });
			}
		}
	}
</script>

<style>
	.mix-icon {
		height: 2rem;
		line-height: 2rem;
		font-size: 20px;
	}
	.Mengxiangzhichengbo {
		display: flex;
		/* width: 96%; */
		height: 2rem;
		margin: 2%;
		border-radius: 10px;
		background-color: #F3F3F3;
	}
	.toptext {
		
		line-height: 2rem;
		margin-left: 10px;
	}
</style>
