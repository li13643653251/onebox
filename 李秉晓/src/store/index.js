import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  data:"山西"
  },
  mutations: {
	  a(state,n){
		   return state.data=n
	  }
  },
  actions: {
  },
  modules: {
  }
})
