<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/css/restul.css");
	@import url("./common/css/common.css");
	@import url("./common/css/icon.css");
	@import "./wxcomponents/vant/dist/common/index.wxss";
	page{
	  height: 100%;
	  display: flex;
	  flex-direction: column;
	}
	/* @import "./wxcomponents/vant/common/index.wxss"; */
	:not(not) {
		font-family: "Microsoft YaHei";
		/* font-size: 14px; */
	}

	.size12 {
		font-size: 12px ;
		/* color: #AEAEAE; */
	}
	.size14 {
		font-size: 14px ;
		/* color: #AEAEAE; */
	}
    .huise{
		color: #AEAEAE;
	}
	.size16 {
		font-size: 16px;
		color: #AEAEAE;
	}

	.size18 {
		font-size: 18px;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
