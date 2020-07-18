<template>
    <ion-content class="login">
        <div class="loginbacground">
           <ion-grid class="loginmain">
               <ion-row>
                   <ion-col size="10" offset="1" class="col-content">
                       <ion-item lines="none" color='#42b983'><div class="logo"></div></ion-item>
                       <ion-toolbar>
                          <ion-title>L5s会议视频平台</ion-title>
                       </ion-toolbar>
                       <ion-item color='#42b983'>
                            <img src="../assets/imgs/user.png" alt="">
                            <ion-input  placeholder="请输入用户名" :value='Useport.user'  @ionChange="Useport.user=$event.target.value"></ion-input>
                       </ion-item>
                       <ion-item color='#42b983' class="username">
                            <img src="../assets/imgs/user.png" alt="">
                            <ion-input  placeholder="请输入密码" type='password' :value='Useport.psw'  @ionChange="Useport.psw=$event.target.value"></ion-input>
                       </ion-item>
                       <ion-item color='#42b983' class="serveconfig" lines="none" @click="dropdown">
                            <ion-label>服务器配置</ion-label>
                            <img src="../assets/imgs/user.png" alt="">
                        </ion-item>
                       <ion-item color='#42b983'>
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
// import '../assets/js/jQuery.md5.js'
export default {
   props: {
        timeout: { type: Number, default: 1000 },
    },
   name: 'Login',
     data(){
    return{
    Useport:[{
        ip:'',
        port:'',
        user:'',
        psw:''
        }],//端口号
     protocol:'',
    }
  },
    mounted(){
      
  },
    methods: {
     loginin(){
        this.$router.push('/Onetoonevideo');
        this.presentLoading()
     },
      // 懒加载
     presentLoading() {
        return this.$ionic.loadingController
        .create({
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
     background: url('../assets/imgs/login_back.png') no-repeat;
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
     background: url('../assets/imgs/user.png') no-repeat;
     background-size:100% 100%;
     margin: 0 auto;
 }
 .col-content img{
     display: block;
     width:25px;
     height: 25px;
 }
 .loginbutton{
     width:210px;
     height: 45px;
     margin: 0 auto;
     --background:#0F7EFE ;
     margin-top: 50px ;
 }
</style>