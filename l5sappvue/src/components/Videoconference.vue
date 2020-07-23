<template>
     <div class="Videoconference">
        <!-- <ion-header></ion-header> -->
        <ion-content class="videocontent">
             <ion-grid>
                  <ion-row class="herderrow">
                       <ion-col>
                           <ion-label class="videolabel">
                               <h3>点对点视频会议</h3>
                                <p>会议号：{{this.$store.state.usertoken}}</p>
                           </ion-label>
                        </ion-col>
                       <ion-col>
                          <ion-button class="videobutton"  @click="stop()">
                              <ion-label shape="round">离开</ion-label>
                           </ion-button>
                       </ion-col>
                  </ion-row>
                  <ion-row>
                      <ion-col class="colvideo">
                            <video id="h5sVideoRemote" src="" class="intercomvideoplay" autoplay webkit-playsinline playsinline></video>
                            <video id="h5sVideoLocal" muted src="" autoplay class="h5sLocal" webkit-playsinline playsinline></video>
                      </ion-col>
                  </ion-row>
             </ion-grid>
             <!-- 要是提醒 -->
             <!-- <ion-fab vertical="center" horizontal="start" slot="fixed" class="notifications">
                <ion-chip class="notificationsbtn">
                    <ion-avatar>
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                    </ion-avatar>
                    <ion-label>重要提醒</ion-label>
                </ion-chip>
             </ion-fab> -->
              <!-- 消息 -->
             <!-- <ion-fab vertical="center" horizontal="start" slot="fixed">
                <ion-item class="important" lines='none'>
                      <ion-avatar>
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                      </ion-avatar>
                        <ion-label>王经理：
                            <ion-text color="secondary">
                               <p> 1.点对点视频界面</p>
                            </ion-text>
                        </ion-label>
                </ion-item>
             </ion-fab> -->
              <!-- 点对点视频界面 -->
             <ion-fab vertical="bottom" horizontal="start" slot="fixed" class="vieoone" >
                <ion-item class="vieoonetoone" lines='none'>
                      <ion-label>
                           1.点对点视频界面
                      </ion-label>
                </ion-item>
             </ion-fab>
              <!--语音 -->
              <ion-fab vertical="bottom" horizontal="center" slot="fixed" class="audio">
                <ion-fab-button class="audiobtn">
             </ion-fab-button>
             </ion-fab>
               <!-- 视频 -->
             <ion-fab vertical="bottom" horizontal="cente" slot="fixed" class="videobottom">
                <ion-fab-button class="videobottombtn" @click="connection()">
                    视频
                </ion-fab-button>
             </ion-fab>
              <!-- 共屏 -->
             <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="totalscreen">
                <ion-fab-button class="totalscreenbtn">
                    
                </ion-fab-button>
             </ion-fab>
        </ion-content>
        <ion-footer></ion-footer>
        <eventLists></eventLists>
     </div>
</template>

<script>
import '../assets/js/adapter.js'
import '../assets/js/platform.js'
import '../assets/js/h5splayerhelper.js'
import '../assets/css/h5splayer.css'
import uuid from '../assets/js/uuid1'
import {H5siOS,H5sPlayerCreate} from '../assets/js/h5splayerhelper.js'
import {H5sPlayerWS,H5sPlayerHls,H5sPlayerRTC,H5sRTCGetCapability,H5sPlayerAudBack,H5sConference,H5sRTCPush} from '../assets/js/h5splayer.js'
import * as types from '@/vuex/types'
export default {
  name: 'Videoconference',
  data () {
    return {
       v1:undefined,
       h5handler:undefined,
       usertoken:this.$route.params.token,
       VideoCodecs: [],
       VideoCodec:"",
       VideoIns: [],
       VideoIn:"",
       AudioIns: [],
       AudioIn:"",
       AudioOuts: [],
       AudioOut:"",
       Resolutions: [],
       Resolution:"",
       Bitrates: [],
       Bitratess:"",
       el:undefined
     } 
  } ,
 beforeDestroy() {
        if (this.h5handler != undefined)
        {
            this.h5handler.disconnect();
            delete this.h5handler;
            this.h5handler = undefined;
        }
        if (this.v1 != undefined)
        {
            this.v1.disconnect();
            delete this.v1;
            this.v1 = undefined;
            alert('aa')
            // $("#h5sVideoLocal").get(0).load();
        }
      },
  created(){
         H5sRTCGetCapability(this.UpdateCapability)
   },
  mounted(){
        //  this.updisplay()
         let _this=this
        //  在其他的页面的值
          if(_this.usertoken!=undefined){
            console.log("播放",this.usertoken)
            _this.l5svideplay()
           
          }
          if(this.$route.params.videoVlue!==undefined){
              let playVlue=this.$route.params.videoVlue
               _this.videocall(playVlue)
          }
        //  在本页面传过来拨打的值
         _this.$root.bus.$on('meettoken', function(token){
            console.log("播放",token)
            _this.usertoken=token
            _this.l5svideplay()
         });

           _this.$root.bus.$on('audiocurrent', function(audioVlue){
               console.log(audioVlue)
          });
          _this.$root.bus.$on('videocurrent', function(videoVlue){
               console.log(videoVlue)
              _this.videocall(videoVlue)
        });
          
  },
  methods:{
      //视频对讲
       videocall(playVlue){
          var token = uuid(4, 10);
          this.usertoken=token
          this.$store.commit(types.USERTOKEN, token)
          var starfs=new Date().getTime();
          var endds=new Date().getTime();
          var ks=new Date(starfs).toISOString()+"08:00";
          var jss=new Date(endds).toISOString()+"08:00";

          var url = this.$store.state.callport + "/api/v1/OnetoOneConference?name="
          +this.$store.state.Useport.user+"&token="
          +token+"&begintime="
          +ks+"&endtime="
          +jss+"&user="
          +playVlue+"&session="+ this.$store.state.token;
          this.$http.get(url).then(res=>{
               console.log(res)
               this.l5svideplay();
          })
       } ,
           //播放视频
       l5svideplay(){
          if (this.h5handler != undefined)
          {    alert('8')
               this.h5handler.disconnect();
               delete this.h5handler;
               this.h5handler = undefined;
          }
        //   console.log(playid,token,streamprofile)
          let conf = {
               videoid:"h5sVideoRemote",
               protocol:this.$store.state.protocol, //http: or https:
               host: this.$store.state.Useport.ip+':'+this.$store.state.Useport.port, //localhost:8080
               streamprofile: "main", // {string} - stream profile, main/sub or other predefine transcoding profile
               rootpath: '/', // '/'
               token: this.usertoken,
               hlsver: 'v1', //v1 is for ts, v2 is for fmp4
               session: this.$store.state.token //session got from login
          };
            console.log("播放",conf);
            
            this.h5handler = new H5sPlayerRTC(conf);
         
            this.h5handler.connect( );
            
            // this.connection()
         },
           //开启视频
        connection(){
            if (this.v1 != undefined)
                {
                    this.v1.disconnect();
                    delete this.v1;
                    this.v1 = undefined;
                }
                var audioout=this.audioout
                var conf1 = {
                    localvideoid:'h5sVideoLocal', //{string} - id of the local video element tag
                    //localvideodom: h5svideodomlocal, //{object} - local video dom. if there has videoid, just use the videoid
                    protocol: this.$store.state.protocol, //http: or https:
                    host:this.$store.state.Useport.ip+':'+this.$store.state.Useport.port, //localhost:8080
                    rootpath:'/', // {string} - path of the app running
                    user:this.$store.state.Useport.user, // {string} - user name
                    type:'media', // {string} - media or sharing
                    audio: audioout,
                    callback: this.PlaybackCB, //Callback for the event
                    userdata: null, // user data
                    session: this.$store.state.token, //session got from login
                    consolelog: 'true' // 'true' or 'false' enable/disable console.log
                };
                // return false
                this.v1 = new H5sRTCPush(conf1);
                console.log(conf1)
                console.log("*******",this.VideoCodec,"1*",
                    this.VideoIn,"2*",
                    this.Bitratess,"5*",
                    this.Resolution,"3*",
                    this.AudioIn,
                    this.v1,
                    true
                )
                // return false
                this.v1.connect(
                    this.VideoIn,
                    this.VideoCodec,
                    this.Bitratess,
                    this.Resolution,
                    this.AudioIn,
                    false
                );
            
        },
       PlaybackCB(event, userdata){
            
            var msgevent = JSON.parse(event);
            // var chatrecorddata={
            //     user:msgevent.user,
            //     msg:msgevent.msg
            // }
            // this.chatrecord.push(chatrecorddata)
            // this.$nextTick(() => {
            //     let ele = document.getElementById('chatrecord');
            //     ele.scrollTop = ele.scrollHeight;
            // })
            console.log("Playback callback ", event,msgevent,this.chatrecord,chatrecorddata);
        },
       updisplay(){
          var up= H5sRTCGetCapability(this.UpdateCapability);
        },
        //参数
       UpdateCapability(capability){
            console.log(capability);
            if(capability){
                console.log(capability)
                for (let i = 0; i !== capability['videocodec'].length; ++i) {
                    const data = capability['videocodec'][i];
                     console.log(data)
                    /* Default use H264 */
                    this.VideoCodec=data
                    
                }		
                for (let i = 0; i !== capability['videoin'].length; ++i) {
                    const data = capability['videoin'][i];
                    console.log(data)
                    this.VideoIn=data.id
                   
                }	

                for (let i = 0; i !== capability['audioin'].length; ++i) {
                    const data = capability['audioin'][0];
                    this.AudioIn=data.id
                    
                }
                
                for (let i = 0; i !== capability['audioout'].length; ++i) {
                    const data = capability['audioout'][0];
                    this. AudioOut=data.id
                    
                }
                
                var resolution = ['QVGA', 'VGA', 'D1', '720P', '1080P', '4K', '8K']
                for (let i = 0; i !== resolution.length; ++i) {
                    const data = resolution[i];
                    /* Default use 720P */
                    if (data == '720P')
                    {
                        this.Resolution=data
                    }
                    
                }
                
                var bitrate = ['32', '64', '128', '256', '512', '1024', '2048', '4096']
                for (let i = 0; i !== bitrate.length; ++i) {
                    const data = bitrate[i];
                  
                    /* Default use 720P */
                    if (data == '1024')
                    {
                        this.Bitratess=data
                    }
                    
                }
            }
        }, 
        // 停止 
       stop(){
            if (this.h5handler != undefined)
            {
                this.h5handler.disconnect();
                delete this.h5handler;
                this.h5handler = undefined;
            }
            if (this.v1 != undefined)
            {
                this.v1.disconnect();
                delete this.v1;
                this.v1 = undefined;
            }
        }  
   }
}
</script>

<style scoped>
 html,body{
      margin: 0;
      padding:0;
 }
.Videoconference{
      width:100%;
      height: 100%;
      margin:0;
      padding:0;
  }
  
.herderrow{
      padding-top: 15px;
}
.videolabel h3{
      color:#FFFFFF;
      font-weight: 500;
      font-size: 20px;
      text-align: left;
      margin-left:15px ;
}
.videolabel p{
      color:#CBCBCB;
      font-weight: 500;
      font-size: 15px;
      text-align: left;
      margin-left:15px ;
}
.videocontent{
      --background:#000000;
}
.videobutton{
      width:65px;
      height: 25px;
      margin-left: 25px;
}
.notifications{
      height: 40px;
      width:150px;
}
.notificationsbtn{
      border-radius: 10px;
      --background:#FFFFFF;
}
.important{
      width: 194px;
      /* height: 35px; */
      --background:#1A1A1A;
      border-radius: 10px;
      margin-top:50px ;
      margin-left: 20px;
      --color:#BBBBBB;
    }
.vieoone{
     bottom: 30px;
     margin-left: 20px;
}
.vieoonetoone{
    width: 150px;
    /* height: 35px; */
    --background:#1A1A1A;
    border-radius: 10px;
    
    --color:#BBBBBB;
}
.audio {
     bottom: 30px; 
     margin-left:-2px;
}
.videobottom{
     bottom: 30px;
     margin-left:60px;
}
.totalscreen{
     bottom: 30px;
     /* margin-left:33.33%; */
}
.audiobtn{
     --background:#1A1A1A;
}  
.videobottombtn{
     --background:#1A1A1A;
}
.totalscreenbtn{
     --background:#1A1A1A;
}
.h5sLocal{
     display: none;
}

</style>>
