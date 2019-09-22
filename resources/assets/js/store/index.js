import Vue from 'vue';
import vuex from 'vuex'
import authUser from './modules/authUser';
Vue.use(vuex)

export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules:{
    authUser
  }
})
