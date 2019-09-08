
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import router from './routes'
import App from './components/App'

import { ValidationProvider ,localize } from 'vee-validate/dist/vee-validate.full';
import zh from 'vee-validate/dist/locale/zh_CN.json'
Vue.component('ValidationProvider', ValidationProvider);
localize('zh',zh);
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
   render:h=>h(App)
});
