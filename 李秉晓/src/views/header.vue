<template>
	<div class="header">
		<div class="header-left">
			<h1><</h1>
		</div>
		<div class="header-input" >
			<span class="iconfont"></span>
			输入城市/景点/游玩主题
		</div>
		<a href="javascript:;">
			<div class="header-right" @click="go()">
				<!-- {{newcity}} -->
				{{num}}
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			go(){
				this.$router.push(`/city`)
			}
		},
		computed:{
		   num(){
			   // this.$store.state.cartjson
		       return  this.$store.state.data;
		   }
		} 
	}
</script>

<style>
	.header {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		line-height: 42.4px;
		background: #00bcd4;
		color: #fff;
		width: 100%;
	}

	.header-left {
		width: 32px;
		height: 42.4px;
		float: left;
	}

	.header .header-left .back-icon {
		text-align: center;
		font-size:24px;
	}



	.header .header-input {
		line-height: 32px;
		flex: 1;
		height: 32px;
		margin-top: 5px;
		margin-left: 5px;
		padding-left: 10px;
		background: #fff;
		border-radius:5px;
		color: #ccc;
	}

	.header a {
		color: #25a4bb;
		text-decoration: none;
	}
	.header-right{
		color: #fff;
		text-align: center;
		padding: 0 3px;
	}
</style>
