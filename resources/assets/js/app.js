
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import jwtToken from './helpers/JWT'
import App from './components/App'

import { ValidationProvider ,ValidationObserver,localize } from 'vee-validate/dist/vee-validate.full';
import zh from 'vee-validate/dist/locale/zh_CN.json'
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('zh',zh);

axios.interceptors.request.use(function(config){
   if (jwtToken.getToken()) {
      config.headers['Authorization']='Bearer '+jwtToken.getToken();
   }
   return config
},function (error) {
   return Promise.reject(error);
});


// Add the required rule

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter)




new Vue({
   el: '#app',
   router,
   store,
   render:h=>h(App)
});
