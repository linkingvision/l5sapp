<template>
     <div class="Videoconference">
        <!-- <ion-header></ion-header> -->
        <ion-content class="videocontent">
             <ion-grid>
                  <ion-row class="herderrow">
                       <ion-col>
                           <ion-label class="videolabel">
                               <h3>{{conferencentittlename}}</h3>
                                <p>会议号：{{usertoken}}</p>
                           </ion-label>
                        </ion-col>
                       <ion-col class="leavecol">
                          <ion-button class="videobutton"  @click="stop()">
                              <ion-label shape="round">离开</ion-label>
                           </ion-button>
                       </ion-col>
                  </ion-row>
                  <ion-row>
                      <ion-col class="colvideo">
                            <video id="h5sVideoRemote" src="" class="intercomvideoplay" autoplay webkit-playsinline playsinline style= "object-fit: fill;"></video>
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
              <ion-fab vertical="bottom" horizontal="center" slot="fixed" class="menufunction">
                    <ion-button class="audiobtn">语音</ion-button>
                    <ion-button class="audiobtn" @click="connection()">视频</ion-button>
                    <ion-button class="audiobtn">共屏</ion-button>
              </ion-fab>
        </ion-content>
        <ion-footer></ion-footer>
        <eventLists></eventLists>
        <ion-backdrop stop-propagation="true" class="backdropplay" ></ion-backdrop>
        <ion-fab vertical="start" horizontal="start" slot="fixed" class="camerinfo">
            <ion-content class="joincontent">
                <div class="divmiddle">
                    <ion-item lines="none" class="confercenum">
                        <ion-label>摄像头</ion-label>
                        <ion-input class="joininput">
                            <ion-select 
                            interface="popover" 
                            class="join-select" 
                            slot="end" 
                            :value='cameradata' 
                            @ionChange="cameradata=$event.target.value">
                                <ion-select-option class="remor" v-for="(item,index) in camera" :key="index" :value='item.value'>{{item.label}}</ion-select-option>
                            </ion-select>
                        </ion-input>
                    </ion-item>
                    <ion-item lines="none" class="confercenum">
                        <ion-button slot="start" 	color='secondary'  shape="round" fill="outline" class="cancelbtn" @click="cancelluploadinfo()">取消</ion-button>
                        <ion-button slot="end"  shape="round" class="dongbtn" @click="connectionbtn()">确定</ion-button>
                    </ion-item>
                </div>
            </ion-content>
        </ion-fab>
    </div>
</template>

<script>
import '../../assets/js/adapter.js'
import '../../assets/js/platform.js'
import '../../assets/js/h5splayerhelper.js'
import '../../assets/css/h5splayer.css'
import uuid from '../../assets/js/uuid1'
import {H5siOS,H5sPlayerCreate} from '../../assets/js/h5splayerhelper.js'
import {H5sPlayerWS,H5sPlayerHls,H5sPlayerRTC,H5sRTCGetCapability,H5sPlayerAudBack,H5sConference,H5sRTCPush} from '../../assets/js/h5splayer.js'
import * as types from '@/vuex/types'
export default {
  name: 'Videoconference',
  data () {
    return {
       v1:undefined,
       h5handler:undefined,
       usertoken:this.$route.params.token,
       conferencentittlename:this.$route.params. conferencename,
       userdata:[],
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
       el:undefined,
       camera:[
              {
                value: "environment",
                label: "environment"
               },{
                value: "user",
                label: "user"
               }
            ],
        cameradata:'user'
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
        }
      },
          //初始化 
  created(){
         H5sRTCGetCapability(this.UpdateCapability)
   },
         
  mounted(){
       if(this.usertoken!= undefined){
              this.uploadinfo()
              this.l5svideplay() 
                
        }else{
            this.$router.push('/Conference')
        }

     },
  methods:{
        //视频对讲
        //获取会议成员列表
        mettuselest(){
            var url = this.$store.state.callport + "/api/v1/GetParticiant?token="+this.usertoken+"&session="+ this.$store.state.token;
            this.$http.get(url).then(result=>{
                console.log(result)
                var data=result.data.particiants
                if(data.length==0){
                    return false
                }
                console.log(data)
                for(var i=0; i<data.length;i++){
                    if(data[i].strToken==this.usertoken){
                        continue
                    }
                  var userdata={
                        mosaicId: data[i].mosaicId,
                        nSolt: data[i].nSolt,
                        partId: data[i].partId,
                        strName: data[i].strName,
                        strToken: data[i].strToken,
                        strType: data[i].strType,
                        bOnline: data[i].bOnline
                    }
                    // if(userdata["strType"]=="device"){
                    //     userdata["icon"]="iconfont icon-shexiangji"
                    // }
                    this.userdata.push(userdata)
                    console.log(this.userdata)
                }
            })
        },   
       
        //播放视频
       l5svideplay(){
          if (this.h5handler != undefined)
          {    
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
           
           },
           //开启视频
        connection(){
            console.log(this.cameradata)
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
                    facingmode:this.cameradata, // {string} - user or environment; desktop remove this config
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
             this.$nextTick(()=>{
                this.$router.push('/Conference');
             });

        } ,
       // 确定
       connectionbtn(){
           if(this.cameradata!=undefined){
               this. cancelluploadinfo()
               this.connection()
            }else{
               return
           }
       },
       // 显示上传信息
        uploadinfo(){
            $('.backdropplay').css('display','block')
            $('.camerinfo').css('display','block') 
        },
        // 取消会议模态框 、
        cancelluploadinfo(){
            $('.backdropplay').css('display','none')
            $('.camerinfo').css('display','none')
        },
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
.leavecol{
     text-align: right;
}
.videobutton{
      height: 60px; 
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
     bottom: 50px;
     margin-left: 20px;
}
.vieoonetoone{
    width: 200px;
    /* height: 80px; */
    --background:#1A1A1A;
    border-radius: 10px;
    --color:#BBBBBB;
    font-size: 18px;
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
.intercomvideoplay{
     width:100%;
     /* height:50px; */
}
.menufunction{
    bottom: 50px;
    left:50%;
    /* transform: translateX(-50%);  */
}
ion-backdrop {
    opacity: 0.6;
}
/* 弹框 */
.camerinfo{
      width:50%;
      height: 20%;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 9999999999999999999999;
      display:none;
}
.divmiddle{
   position: absolute;
   top: 50%;
   left:50%;
   transform: translate(-50%,-50%);
   padding:0 10px;  
}
.joincontent{
    --background:#282828;
 }
 .confercenum{
    --background:transparent;
    --color:#FFFFFF ;
    font-size: 18px;
    /* margin-bottom:5px; */
 }
 .joininput{
    border: 1px solid #303030;
    --background:#282828;
    --color:#9A9A9A;
    margin-left: 15px;
    border-radius: 10px;
    height: 50px;
 }
 ion-select {
     width: 100%;
     color: #9A9A9A;
 }
 .join-select{
     width: 100%;
     color: #9A9A9A;
 }
 .cancelbtn{
     width: 100px;
     height: 50px;
}
 .dongbtn{
     width: 100px;
     height: 50px;
 }
</style>>
