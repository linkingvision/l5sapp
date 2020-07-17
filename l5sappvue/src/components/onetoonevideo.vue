<template>
  <div class="hello">
      <ion-header class="helo-header">
         <ion-toolbar class="helo-header-toolbar">
             <ion-title class="helo-title">视频对讲</ion-title>
          </ion-toolbar>
      </ion-header> 
      <ion-content class="hello-content">
         <ion-list class="list-content" lines='none'>
             <ion-list-header lines="full" class="list-header">
                 <ion-label>在线联系人</ion-label>
              </ion-list-header>  
              <ion-item class="list-item" v-for="(item, index) in userdata" :key="index" button @click="itemClick($event)" detail='false' lines="full">
                <img src="../assets/imgs/user.png" alt="">
                <ion-label>{{item.strName}}</ion-label>
              </ion-item>
          </ion-list>
          <ion-fab vertical="bottom" 	horizontal='center' slot="fixed" class="fabfooter">
                <ion-fab-button class="fabfooterbtn">
                   <img src="../assets/imgs/middleimg.png" alt="">
                </ion-fab-button>
          </ion-fab>
          <ion-butto></ion-butto>
      </ion-content>
      <ion-footer>
         <ion-toolbar class="footer">
            <div class="footerbgc">
                 <ion-buttons class="footerbuttons">
                    <ion-button class="btnone">
                        <img src="../assets/imgs/footerfirst.png" alt="">
                      </ion-button>
                      <ion-button class="btnone">
                          <img src="../assets/imgs/dianduidian--2@2x.png" alt="">
                      </ion-button>
                      <ion-button class="btnone">
                          <img src="../assets/imgs/shezhi_guanli-2@2x.png" alt="">
                      </ion-button>
                      <ion-button  class="btnone">
                          <img src="../assets/imgs/yonghu-8@2x.png" alt="">
                      </ion-button>
                  </ion-buttons>
             </div>
             <div class="conectbtn">
                <ion-item class="conectbtnitem"  @click="audioclck()" button detail='false'>
                    <div class="audioconference"></div>
                </ion-item>
                <ion-item class="conectbtnitem"  @click="videoclck()" button detail='false'> 
                     <div class="videoconference"></div>
                </ion-item>
             </div>
          </ion-toolbar>
      </ion-footer>
  </div>
</template>

<script>
import '../assets/js/jquery.js'
import '../assets/js/jQuery.md5.js'
import {H5sEvent} from '../assets/js/h5sevent.js'
import '../assets/js/adapter'
import uuid from '../assets/js/uuid1'
import {H5sPlayerRTC,H5sRTCGetCapability,H5sRTCPush} from '../assets/js/h5splayer.js'
export default {
  name: 'onetoonevideo',
  data () {
    return {
       userdata:[],
       usertoken:'',
    } 
  },
created(){
   
},
 mounted(){
    $('.conectbtn').hide()
   console.log(this.userdata)
   this.getuser()
   this.videoConferen()
  },
 methods: {
   // 获取用户信息
    getuser(){
      let slideurl='http://192.168.100.142:9080';
      let loginsession='a26019f4-e33e-4c4c-a9ac-59e218010904';
      let rooturl=slideurl+"/api/v1/GetOnlineUserList?session=" +loginsession;
      this.$http.get(rooturl).then(res=>{
           console.log(res)
           let useritem=res.data.userList
           if(res.status==200){
              for(let i=0;i<useritem.length;i++){
                this.userdata.push(useritem[i])
              } 
            }
        }).catch(()=>console.log('promise catch err'))
     },
    itemClick(e){
        if($('.conectbtn').is(':hidden')){
           $('.conectbtn').show()
        }else{
           $('.conectbtn').hide()
        }
        if($('.footerbgc').is(':hidden')){
           $('.footerbgc').show()
          $('.fabfooter').show()
        }else{
           $('.footerbgc').hide()
           $('.fabfooter').hide()
        }
    },
   videoConferen(){
          var strSession='a26019f4-e33e-4c4c-a9ac-59e218010904';
          var _this=this
          var conf1 = {
               protocol: 'http:', //http: or https:
               host: '192.168.100.142:9080', //localhost:8080
               rootpath:'/', // '/'
               // callback:this.EventCB, 
               userdata: null, // user data
               session: strSession, //session got from login
               consolelog: 'true' // 'true' or 'false' enable/disable console.log
          };
               var e1 = new H5sEvent(conf1);
               e1.connect();
     },

    audioclck(){
       this.$router.push('/Audioconference')
      },
    videoclck(){
        var token = uuid(4, 10);
            this.usertoken=token
            var starfs=new Date().getTime();
            var endds=new Date().getTime();
            var ks=new Date(starfs).toISOString()+"08:00";
            var jss=new Date(endds).toISOString()+"08:00";
             this.$root.bus.$emit('meettoken',this.usertoken );
            var url ='http:'+'//'+ '192.168.100.142:9080'+ "/api/v1/OnetoOneConference?name="
            +"admin"+"&token="
            +token+"&begintime="
            +ks+"&endtime="
            +jss+"&user="
            +'admin'+"&session="+'a26019f4-e33e-4c4c-a9ac-59e218010904';
            this.$http.get(url).then(result=>{
                console.log(result)
               //  this.l5svideplay();
                this.$router.push('/Videoconference')
         })
      
    }
 //.......................
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    width:100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .hello{
    width:100%;
    height: 100%;
  }
  .list-content img{
    display: block;
    width: 20px;
    height: 20px;
    margin-right:20px ;
  }
  .hello-content{
    width: 100%;
    height: 86%;
    --background:#000000;
    padding: 0;
    margin: 0;
    --padding-start:0;
    --padding-top:0;
    --padding-bottom:0;
   }
  .helo-header{
     background-color: #161616;
  }
  .helo-header-toolbar{
     --background:#161616;
  }
  .helo-title{
     --color:#FEFEFE;
  }
  .list-content{
     padding: 0;
     margin:0;
  }
  .list-header{
     --background:#000000;
     --color:#8C8C8C;
     font-weight: 400;
     font-size: 20px;
  }
  .list-item{
     --background:#191919;
     --color:#FFFFFF;
     --color-activated:#1362FF;
   }
  .footer{
     --background:#000000;
     --border-color:#000000;
   }
  .footerbgc{
     width: 100%;
     height: 56px;
     background: url('../assets/imgs/footerbgc@2x.png') no-repeat;
     background-size:100% 100%;
  }
  .footerbuttons{
     height: 100%;
  }
  .footerbuttons img{
     display: block;
     width: 25px;
     height: 25px;
     margin:0 auto;
  }
  .btnone{
    width:20%;
 }
  .btnone:nth-child(2){
    margin-right: 10%;
 }
  .btnone:nth-child(3){
    margin-left: 10%;
 }
  .fabfooter{
    bottom: -32px;
    /* display: none; */
  }
  .fabfooterbtn{
    --background:transparent;
    width:73px;
    height:73px;
 }
  .fabfooter img{
    display: block;
    width:100%;
    height: 100%;
    margin-right:8px;
 }
 .conectbtn{
    display: none;
 }
 .conectbtnToglle{
    display: block;
 }
 .fabconectbtn{
    width:100%;
    height: 100%;
 }
 .audioconference{
     width: 100%;
     height: 100%;
     background: url('../assets/imgs/andiocofer.png') no-repeat;
     background-size:100% 100%;
 }
.conectbtnitem{
     /* height: 110px; */
     --padding-start:0;
     --padding-end:0;
     --inner-padding-end:0;
     --background:transparent;
     --color-activated:#1362FF;
     /* --background-activated:#1362FF; */
 }
  .videoconference{
     width: 100%;
     height: 100%;
     background: url('../assets/imgs/videoconfer.png') no-repeat;
     background-size:100% 100%;
 }


</style>
