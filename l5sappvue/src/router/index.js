import Vue from 'vue'
// import Router from 'vue-router'
import Onetoonevideo from '@/components/onetoonevideo'
import Audioconference from '@/components/Audioconference'
import Videoconference from '@/components/Videoconference'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'Onetoonevideo ',
      component: Onetoonevideo 
    },
    {
      path: '/Audioconference',
      name: 'Audioconference ',
      component: Audioconference
    },
    {
      path: '/Videoconference',
      name: 'Videoconference',
      component: Videoconference
    }
  ]
})
