import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        //使用端口号
       callport:"",
        Useport:{
          ip:" ",
          port:" ",
          user:" ",
          psw:""
         },//查看端口号
         root:null,
         token:null,
         users:null,
         protocol:'',
    },
    mutations: {
        [types.USEPORT]: (state, data) => {
          //console.log("+++++++++++++",data);
          localStorage.h5appport= data
          state.callport=data
        },
    
        [types.USEPORTIP]: (state, data) => {
          //console.log("+++++++++++++",data);
          localStorage.h5appportip= data
          state.Useport.ip=data
        },
        [types.USEPORTPORT]: (state, data) => {
          //console.log(data);
          localStorage.h5appportport= data
          state.Useport.port=data
        },
        [types.USEPORTUSER]: (state, data) => {
          //console.log(data);
          localStorage.h5appportuser= data
          state.Useport.user=data
        },
        [types.USEPORTPSW]: (state, data) => {
          //console.log(data);
          localStorage.h5appportpsw= data
          state.Useport.psw=data
        },
        [types.PROTOCOL]: (state, data) => {
          //console.log(data);
          localStorage.h5appprotocol= data
          state.protocol=data
        },
       //不知道
        [RECEIVE_PETSINFO](state,{petsInfo}){
          state.petsInfo = petsInfo
        },
       // login
        [types.LOGIN]:(state, data) => {
          console.log(data)
          localStorage.h5stoken = data
          state.token = data
        },
        [types.LOGOUT]: (state) => {
          localStorage.removeItem('h5stoken')
          state.token = null
          localStorage.removeItem('h5suser')
          state.users = null
          localStorage.removeItem('h5sroot')
          state.root = null
        },
        [types.RADIO]:(state, data) => {
          console.log(data)
          state.radio = data
        },
        [types.RADIO]:(state, data) => {
          console.log(data)
          state.imgURL = data
        },
      },
      actions,
      getters
  })
