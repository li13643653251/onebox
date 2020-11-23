import Vue from 'vue'
import App from './App'
import store from './store'  
import request from "./network/request.js"
// import shoprequest from "./network/shop.js"
Vue.prototype.$store = store  
Vue.config.productionTip = false
// Vue.prototype.$shoprequest = request
Vue.prototype.$request = request

App.mpType = 'app'

const app = new Vue({
  ...App,
    store
})
app.$mount()
