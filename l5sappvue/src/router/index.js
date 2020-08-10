import Vue from 'vue'
// import Router from 'vue-router'
import Loginin from '@/components/loginin'
import Onetoonevideo from '@/components/onetoonevideo'
import Audioconference from '@/components/Audioconference'
import Videoconference from '@/components/Videoconference'
import Conference from '@/components/conference'
import Createdconference from '@/components/createdconference'
import Playconferce from '@/components/playvideotalkback/playconferce'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Login',
      component: Loginin 
    },
    {
      path: '/Login',
      name: 'Loginin ',
      component: Loginin 
    },
    {
      path: '/Onetoonevideo',
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
    },
    {
      path: '/Conference',
      name: 'Conference',
      component: Conference
    },
    {
      path: '/Createdconference',
      name: 'Createdconference',
      component: Createdconference
    },
    {
      path: '/Playconferce',
      name: 'Playconferce',
      component: Playconferce
    }
  ]
})
