// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Ionic from '@ionic/vue';
import './assets/js/jquery.js';
// import $ from 'jquery'
import '@ionic/core/css/ionic.bundle.css';
Vue.use(Ionic);
Vue.config.productionTip = false
Vue.prototype.$http = axios
const bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
     bus
  },
  components: { App },
  template: '<App/>'
})
