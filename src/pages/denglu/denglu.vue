<template>

	<view class="container">

		<!-- 新增加的内容 -->
		<view class='denglu_title'>
			<navigator class='denglu_title_1' url='../../index/index'>登陆</navigator>
			<!-- <navigator class='denglu_title_2' url=''>登录</navigator> -->
		</view>
		<view class="wechat-login-btn">
			<button  style="position: relative;" open-type="getUserInfo" class="btn-item btn-item-wx" @getuserinfo="theFourth">
				
				<image class="icon" src="../../static/icon_wechat.png">快捷登录</image>
				<!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" withCredentials="true">获取手机号码</button> -->
				
			</button>
			
		</view>
		<view class='denglu_btn'>点击微信头像登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad: function() {
			uni.login({
				success: (res) => {
					if (res.errMsg == "login:ok") {
						this.code = res.code;
					} else {
						uni.showToast({
							title: '系统异常，请联系管理员!'
						})
					}
					console.log(res)
				}
			})
		},
		methods: {
			getUserInfo(e) {
				let that = this;
				var p = uni.getSetting();
				p.then(function(isAuth) {
					console.log('是否已经授权', isAuth);
					if (isAuth) {
						console.log('用户信息，加密数据', e);
						//eData  包括//微信头像//微信名称 还有加密的数据.
						let eData = JSON.parse(e.detail.rawData);
						console.log(eData)
					} else {
						uni.showToast({
							title: '授权失败，请确认授权已开启',
							mask: true,
							icon: 'none'
						})
					}
				});
			},
			theFourth() {
				var that = this;
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						console.log(res.provider);
						//支持微信、qq和微博等
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: (loginRes) => {
									// loginRes.code;
									let code = loginRes.code;
									uni.getUserInfo({
										provider: 'weixin',
										success: (infoRes) => {
											console.log(infoRes)
											console.log('-------获取微信用户所有-----');
											let infoRess = infoRes.userInfo;
											that.userImage = infoRess.avatarUrl;
											that.usertitle_1 = infoRess.nickName
											that.userUrl = false;
                                                
											this.$request("member/api/login", {
												"code": this.code,
												"nickName": infoRess.nickName,
												"headUrl": infoRess.avatarUrl
											}, "post").then(res => {
												console.log(res,111111)
												let obj = {
													id:res.member.id,
													username: res.member.nickname,
													heardimg: res.member.header,
                                                    sign:res.member.sign,
													mobile:res.member.mobile
												}
												uni.setStorageSync('token', res.member.accessToken);
												uni.setStorageSync('user', obj);
												uni.setStorageSync("openid", res.member.openId);
												if (res.msg = "success") {
													uni.showToast({
														title: '登陆成功',
														icon: 'success'
													})
												}

												setTimeout(() => {
													uni.switchTab({
														url: '/pages/tabbar/home/home'
													});
												}, 600);
											}).catch(error => {
												console.log(error)
											})
										}
									});
									
									
								},
							
							});
						}
					}
				});
			},
		}
	}
</script>

<style>
	@import url("../../common/css/style/denglu.css");
</style>
