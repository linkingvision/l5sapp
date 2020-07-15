import Vue from 'vue'
// import Router from 'vue-router'
import Onetoonevideo from '@/components/onetoonevideo'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'Onetoonevideo ',
      component: Onetoonevideo 
    }
  ]
})
