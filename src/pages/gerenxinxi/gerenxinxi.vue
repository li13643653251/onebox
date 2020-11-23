<template>
	<view class="xinxibox">
		<view>
			<ul class="countul">

				<li>
					<text class="huise">
						用户资料
					</text>
				</li>
				<li class="baise">
					<text>
						头像
					</text>
					<view class="rightimg huise" @tap="goimg()">

						<img style="border-radius: 60%;" :src="user.heardimg" alt="">
					</view>

				</li>
				<li class="baise" @tap="goname()">
					<text>
						昵称
					</text>
					<view class="rightimg ">
						<view class="rightimgbox huise">
							{{user.username}}
							<view class=" mix-icon icon-you"></view>
						</view>
					</view>
				</li>
				<li class="baise" @tap="goxuanyan()">
					<text>
						我的宣言
					</text>
					<view class="rightimg">
						<view class="rightimgbox huise">
							{{user.sign}}
							<view class=" mix-icon icon-you"></view>
						</view>
					</view>
				</li>
			</ul>


			<ul class="countul">

				<li>
					<text class="huise">
						安全设置
					</text>
				</li>
				<li class="baise">
					<text>
						支付密码
					</text>
					<view class="rightimg">

						<view class="rightimgbox huise">

							<view class=" mix-icon icon-you"></view>
						</view>
					</view>

				</li>
				<li class="baise" @tap="goshouji()">
					<text>
						手机号码
					</text>
					<view class="rightimg ">
						<view class="rightimgbox huise">
							{{user.mobile}}
							<view class=" mix-icon icon-you"></view>
						</view>
					</view>
				</li>
			</ul>


			<ul class="countul">

				<li>
					<text class="huise">
						系统设置
					</text>
				</li>
				<li class="baise">
					<text>
						当前版本
					</text>
					<view class="rightimg">
						<view class="rightimgbox huise">
							2.0.0
							<view class=" mix-icon icon-you"></view>
						</view>
					</view>

				</li>
				<li class="baise">
					<text>
						清除缓存
					</text>
					<view class="rightimg huise">
						<view class="rightimgbox">

							<view class=" mix-icon icon-you"></view>
						</view>
					</view>
				</li>
			</ul>
		</view>
		<view class="xinxibottom" @tap="loginout()">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {

				}
			}
		},
		onLoad: function() {

			// console.log(uni.getStorageSync("user"))
		},
		onShow() {
			this.user = uni.getStorageSync("user")
			console.log("刷新", 123)
		},
		methods: {
			goimg() {
				let _this = this;
				uni.chooseImage({ // 从本地相册选择图片或使用相机拍照。
					count: 1, //默认选择1张图片
					sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
					success: (res) => {
						console.log(res.tempFilePaths[0]); //成功则返回图片的本地文件路径列表 tempFilePaths
						uni.uploadFile({ //将本地资源上传到开发者服务器
							url: baseURL + '/api/Common/upload', //接口地址
							filePath: res.tempFilePaths[0], //图片地址
							name: 'file',
							formData: {
								access_token: uni.getStorageSync('access_token'), //加入token
							},
							success: (uploadFileRes) => {
								let data = JSON.parse(uploadFileRes.data)
								if (data.code == 1) {
									this.my_avatar = data.data.url; //上传成功后返回的图片地址
								}
							}
						});
					}
				});

			},
			goname() {


				uni.navigateTo({
					url: `/pages/gerenxinxi/name`
				});
			},
			goxuanyan() {
				uni.navigateTo({
					url: `/pages/gerenxinxi/xuanyan`
				});
			},
			goshouji() {
				uni.navigateTo({
					url: `/pages/gerenxinxi/shouji`
				});
			},




			loginout() {
				uni.showModal({
					title: '提示',
					content: '您确定要退出登录？',
					cancelText: "取消",
					confirmText: "确定",
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.clearStorageSync();
							uni.showToast({
								title: '退出成功',
								icon: 'success'
							})

							setTimeout(function() {
								uni.switchTab({
									url: '/pages/tabbar/home/home'
								});
							}, 600);

						} else {

						}
					}
				});
			},
		}
	}
</script>

<style>
	.xinxibottom {
		background-color: #F7F7F7;
		width: 90%;
		height: 100rpx;
		margin: 0 5%;
		text-align: center;
		line-height: 100rpx;
		border: 1px solid rgba(7, 17, 27, 0.1);
		margin-top: 20rpx;
	}

	.rightimgbox {
		display: flex;
		align-items: center;
	}

	.rightimg {
		display: flex;
		height: 100%;
		width: 50%;
		align-items: center;
		margin-right: 18rpx;
		justify-content: flex-end;
	}

	.rightimg>img {

		width: 20%;
	}

	.baise {
		height: 96rpx !important;
		background-color: #FFFFFF;
		/* border-top: 1px solid rgba(7, 17, 27, 0.1); */

		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		;
	}

	.countul>li {
		width: 100%;
		height: 118rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.xinxititle {}

	text {
		margin-left: 30rpx;
	}

	.xinxibox {
		height: 100%;
		background-color: #F1F1F1;
	}
</style>
