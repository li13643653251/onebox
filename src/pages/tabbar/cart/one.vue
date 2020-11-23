<template>
	<view class="page">
		<view style=" background-color: #F3F3F3;">
			<aaa :tabBars="tabBars"@onTabTap="onTabTap"></aaa>
		</view>
		<view style="padding-top: 100rpx;">{{ value }}</view>
	</view>
</template>

<script>
  import aaa from "./scroll.vue"
export default {
	data() {
		return {
			num:0,
			value: '',
			tabBars: [
				{
					name: '全部',
					id: '1'
				},
				{
					name: '待付款',
					id: '2'
				},
				{
					name: '待发货',
					id: '3'
				},
				{
					name: '待收货',
					id: '4'
				},
				{
					name: '待评论',
					id: '5'
				},
				{
					name: '退款',
					id: '6'
				}
			]
		};
	},
	onLoad(e) {
		this.num=Number(e.type)
		console.log(e,this.num)
		// this.num=e.type
		// this.$set(this.num,e.type)
		// console.log(this.num)
		this.value = JSON.stringify(this.tabBars[0]);
	},
	onShow(){
		console.log(this.$store.state.type,66666666666)
	},
	methods: {
		onTabTap(item) {
			console.log('item: ' + JSON.stringify(item));
			this.value = JSON.stringify(item);
		}
	},
	components:{
		aaa
	}
};
</script>

<style>
page {
	width: 100%;
	height: 100%;
}
</style>
