<template>
    <ion-content class="login">
        <div class="loginbacground">
           <ion-grid class="loginmain">
               <ion-row>
                   <ion-col size="10" offset="1" class="col-content">
                       <ion-item lines="none" color='#42b983'><div class="logo"></div></ion-item>
                       <ion-toolbar color='#42b983' class="toobar">
                          <ion-title><img src="../assets/imgs/l5sconfer.png" alt=""></ion-title>
                           <!-- <img src="../assets/imgs/l5sconfer.png" alt=""> -->
                       </ion-toolbar>
                       <ion-item color='#42b983' class="loginItem">
                            <img src="../assets/imgs/loginuser.png" alt="">
                            <ion-input  placeholder="请输入用户名" :value='Useport.user'  @ionChange="Useport.user=$event.target.value"></ion-input>
                       </ion-item>
                       <ion-item color='#42b983' class="loginItem">
                            <img src="../assets/imgs/loginPassword.png" alt="">
                            <ion-input  placeholder="请输入密码" type='password' :value='Useport.psw'  @ionChange="Useport.psw=$event.target.value"></ion-input>
                       </ion-item>
                       <ion-item color='#42b983' class="loginItem" lines="none">
                            <ion-label>服务器配置</ion-label>
                            <img src="../assets/imgs/user.png" alt="">
                        </ion-item>
                       <ion-item color='#42b983' class="loginItem">
                             <ion-input  placeholder="请输入IP" :value='Useport.ip' @ionChange="Useport.ip=$event.target.value"></ion-input>
                             <ion-input  placeholder="端口"  :value='Useport.port'  @ionChange="Useport.port=$event.target.value"></ion-input>
                       </ion-item>
                       <ion-item color='#42b983' lines="none">
                             <ion-button shape="round" class="loginbutton" @click="loginin()">
                                 <ion-label>登录</ion-label>
                             </ion-button>
                       </ion-item>
                   </ion-col>
               </ion-row> 
           </ion-grid>
        </div>
    </ion-content>
</template>

<script>
import '../assets/js/jQuery.md5'
import {H5sEvent} from '../assets/js/h5sevent.js'
import * as types from '@/vuex/types'
export default {
   props: {
        timeout: { type: Number, default: 1000 },
    },
   name: 'Login',
    data(){
      return{
      callport:this.$store.state.callport,//使用端口号
      Useport:[{
          ip:'',
          port:'',
          user:'',
          psw:''
          }],//端口号
      protocol:'https:',
      v1:undefined,
      h5handler:undefined,
    }
  },
    created(){
      this.getStorage()
  },
    mounted(){
    
  },
    methods: {
     loginin(){
        //储存登录信息
        let username=this.Useport.user
        let password=this.Useport.psw
        let Ip=this.Useport.ip
        let Port=this.Useport.port
        // 调用储存方法
        this.setStorage(username,password,Ip,Port)
        // 调用储存vuex
        this.$store.commit(types.USEPORTIP, this.Useport.ip)
        this.$store.commit(types.USEPORTPORT, this.Useport.port);
        this.$store.commit(types.USEPORTUSER, this.Useport.user);
        this.$store.commit(types.USEPORTPSW, this.Useport.psw);
        this.$store.commit(types.PROTOCOL, this.protocol);
        let _this=this
        _this.presentLoading()
        let root=process.env.VUE_APP_URL;
        if (root == undefined){
        root = _this.protocol+ "//"+_this.Useport.ip+":"+_this.Useport.port
        _this.callport=root;
        this.$store.commit(types.USEPORT, root);
        }
        let loginurl = root + "/api/v1/Login?user=" +_this.Useport.user + "&password=" + $.md5(_this. Useport.psw);
        console.log(loginurl)
        this.$http.get(loginurl).then(res => {
            console.log(res)
            var data = res.data;
            if (data.bStatus == true){
            this.$store.commit(types.LOGIN, data["strSession"]);
            _this.$router.push('/Conference');
          }
        }).catch((err)=>{console.log(err)})
      },
      // 懒加载
     presentLoading() {
        return this.$ionic.loadingController
        .create({
          cssClass: 'my-custom-class',
          message: '正在登录',
          duration: this.timeout,
        })
        .then(loading => {
          setTimeout(function() {
            loading.dismiss()
          }, this.timeout)
          return loading.present()
        })
    },
      //历史记录存储localstorage
     setStorage(username,password,Ip,Port){
        let loginfo=[ username, password, Ip, Port]
        localStorage.setItem("h5sappuser",JSON.stringify(loginfo))
     },
      // 取值
     getStorage(){
        let login= JSON.parse(localStorage.getItem("h5sappuser"))
        console.log(login)
        if(login.length>0){
           for(var i=0;i<login.length;i++){
           this.Useport.user=login[0];
           this.Useport.psw=login[1]
           this.Useport.ip=login[2]
           this.Useport.port=login[3]
           }
           }else{console.log('无历史数据')}
      },
   }
}
</script>

<style scoped>
 .login{
     width:100%;
     height: 100%;
    }
 .loginbacground{
     width:100%;
     height: 100%;
     background: url('../assets/imgs/loginbacground.png') no-repeat;
     background-size:100% 100%;
 }
 .loginmain{
     width:100%;
     position: absolute;
     top:50%;
     transform: translateY(-50%);
 }
 .logo{
     width:50px;
     height:50px;
     background: url('../assets/imgs/l5slogo.png') no-repeat;
     background-size:100% 100%;
     margin: 0 auto;
 }
 .col-content img{
     display: block;
     width:25px;
     height: 25px;
     margin-right:10px;
 }
 .loginbutton{
     width:210px;
     height: 45px;
     margin: 0 auto;
     --background:#0F7EFE ;
     margin-top: 50px ;
 }
 .toobar img{
     display:block ;
     width:200px;
     height:26px;
     margin:0 auto;
 }
 .loginItem{
     --border-color:#FFFFFF;
     color:#FFFFFF;
 }
</style>