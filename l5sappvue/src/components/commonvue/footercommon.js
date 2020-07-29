import Vue from 'vue'
import Footercommon from './footercommon.vue'
const footertabs={
    install:function(vue){
     //注册并获取组件，然后在main.js中引用
       Vue.component('footertabs', Footercommon)
    }
 }
 export default footertabs;