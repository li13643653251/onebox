export const bassurl = "www.panchaotian.com:1026/"


function onlogin(redirect = false) {
	let user = uni.getStorageSync("user")
	let token = uni.getStorageSync("token")
	if (!user || !token) {
		if (redirect) {
			uni.showModal({
				title: '登录提示',
				content: '由于您尚未登录，请先登录。',
				cancelText: "稍后登录",
				confirmText: "跳转登录",
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
						uni.navigateTo({
							url: '/pages/denglu/denglu',
							success: res => {

							}
						});


					} else  {
						uni.navigateTo({
							url: '/pages/home/home',
							success: res => {

							}
						});
					}
				}
			});
		}
	}
}
export default {
	onlogin,
	bassurl
}
