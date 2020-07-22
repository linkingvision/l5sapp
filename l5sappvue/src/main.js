// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './vuex'
import Ionic from '@ionic/vue';
import 'jquery'
// import $ from 'jquery'
import '@ionic/core/css/ionic.bundle.css';
import eventLists from '@/components/commonvue/index'
Vue.use(Ionic);
Vue.use(eventLists);
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
  store,
  components: { App },
  template: '<App/>'
})
