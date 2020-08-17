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
      component: Loginin ,
      meta:{footShow:false },
      meta:{eventshow:false}
    },
    {
      path: '/Login',
      name: 'Loginin ',
      component: Loginin ,
      meta:{
        footShow:false,
        eventshow:false 
       }
    },
    {
      path: '/Onetoonevideo',
      name: 'Onetoonevideo ',
      component: Onetoonevideo ,
      meta:{
            footShow:true,
            eventshow:true
          }
    },
    {
      path: '/Audioconference',
      name: 'Audioconference ',
      component: Audioconference,
      meta:{
            footShow:true,
            eventshow:true
        }
    },
    {
      path: '/Videoconference',
      name: 'Videoconference',
      component: Videoconference,
      meta:{ eventshow:true}
    },
    {
      path: '/Conference',
      name: 'Conference',
      component: Conference,
      meta:{
            footShow:true,
            eventshow:true
          }
    },
    {
      path: '/Createdconference',
      name: 'Createdconference',
      component: Createdconference,
      meta:{
            footShow:true,
            eventshow:true
        }
    },
    {
      path: '/Playconferce',
      name: 'Playconferce',
      component: Playconferce,
      meta:{ eventshow:true }
    }
  ]
})
