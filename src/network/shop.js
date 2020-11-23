// const allbaseUrl = 'https://bird.ioliu.cn/v1?url=http://www.panchaotian.com:1035/'   
// const shoprequest = (url = '', date = {}, type = 'GET', header = {
// }) => {
//     return new Promise((resolve, reject) => {
//         uni.request({
//             method: type,
//             url: allbaseUrl + url,
//             data: date,
//             header: header,
//             dataType: 'json',         
//         }).then((response) => {
//             setTimeout(function() {
//                 uni.hideLoading();
//             }, 200);
//             let [error, res] = response;        
//             resolve(res.data);
//         }).catch(error => {
//             let [err, res] = error;
//             reject(err)
//         })
//     });
// }
// export default shoprequest