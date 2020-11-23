import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		   login: false,  
		   token: '',  
		   avatarUrl: '1111',  
		   userName: '' ,
		   type:6
	},
    mutations: {
		   edit(state,n){
		            state.type = n
					console.log(state,n)
					
		        }
	},
    actions: {}
})
export default store