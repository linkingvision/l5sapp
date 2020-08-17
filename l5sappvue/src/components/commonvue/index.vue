<template>
  <div class="showevent" >
      <ion-backdrop stop-propagation="true" class="backdrop" ></ion-backdrop>
      <ion-fab vertical="start" horizontal="start" slot="fixed" class="onetoonemoald" v-show="showevetlist=='show'">
            <ion-conten class="onetoonecontentmoadl">
                <div class="oneTooneposition">
                     <ion-item class="onetooneconfercenum" lines="none">
                           <ion-label>是否加入视频会议？</ion-label>
                     </ion-item>
                     <ion-item lines="none" class="camer-switchitem">
                           <ion-label class="camer-label">{{camerlabelname}}</ion-label>
                           <ion-toggle class='camer-togggle' :checked="answercamercheck"  @ionChange="answercamercheck=$event.target.checked">
                           </ion-toggle>
                     </ion-item>
                     <ion-item lines="none" class="onetooneconfercenum">
                           <ion-button slot="start" color='secondary'  shape="round" fill="outline" class="onecancelbtn" @click="onetoonecancell()">取消</ion-button>
                           <ion-button slot="end"  shape="round" class="onecancelbtn" @click="onetoonedongokey()">确定</ion-button>
                     </ion-item>
               </div>
            </ion-conten>
      </ion-fab>
   </div>
</template>

<script>
   import '../../assets/js/adapter.js'
   import {H5sEvent} from '../../assets/js/h5sevent.js'
export default {
   name:"event",
   data(){
       return{
          meettoken:undefined,
		      sharedstart:undefined,
		      sharedstop:undefined, 
          el:undefined,
          answercamercheck:false,
          showevetlist:'hide',
          createdconferencename:'',
          camercheck:false,
          camerlabelname:'user',
       }
   },
  watch:{
     	 answercamercheck(val){
              this.camercheck=val
			  if(this.camercheck==true){
              this.camerlabelname='environment'
        }else{
              this.camerlabelname='user'
        }
      }
   },
  beforeDestroy() {
      if (this.e1 != undefined)
         {
         this.e1.disconnect();
         delete this.e1;
         this.e1 = undefined;
      }
   },
    created(){
         
        //  this.EventCB
   },
   mounted(){
      $('.tankuang').hide()
      this.videoConferen()  
  },
   methods:{
    // 视频播放
		l5svideplay(){
			 if(this.meettoken!=undefined){
					if(this.$router.history.current.name!="Videoconference"){
						console.log(this.camerlabelname)
						this.$router.push({
							name: `Videoconference`,
							path: 'Videoconference',
							params: {
                token:this.meettoken,
                camertype:this.camerlabelname,
							}
						})
					}else{   
            this.$root.bus.$emit('meettoken', this.meettoken,this.camerlabelname);
          }
					console.log(this.$router.history.current.name)
				}
     },
     // 显示事件
    showevent(){
        $('.backdrop').css('display','block')
        this.showevetlist='show'
    },
     // 取消事件
    onetoonecancell(){
        $('.backdrop').css('display','none')
        this.showevetlist='hide'
     },
     // 确定事件
     onetoonedongokey(){
        this.l5svideplay()
        $('.backdrop').css('display','none')
        this.showevetlist='hide'
     },
      //会议通知弹窗    
    //  presentAlertConfirm() {
    //   return this.$ionic.alertController
    //       .create({
    //       cssClass: 'my-custom-class',
    //       header: '视频会议',
    //       message: '是否加入视频会议？',
    //       buttons: [{
    //           text: '否',
    //           role: 'cancel',
    //           cssClass: 'secondary',
    //           handler: blah => {
    //           console.log('Confirm Cancel:', blah)
    //           },},
    //           {
    //           text: '是',
    //           handler: () => {
    //              console.log(this.meettoken)
    //              this.l5svideplay()
    //           },
    //         },
    //       ],
    //     })
    //     .then(a => a.present())
    // }, 
   videoConferen(){
        var root = process.env.API_ROOT;
        var wsroot = process.env.WS_HOST_ROOT;
        if (root == undefined){
            root = this.$store.state.protocol + '//' +this.$store.state.Useport.ip+":"+this.$store.state.Useport.port + window.location.pathname;
        }
        if (wsroot == undefined)
        {
            wsroot =this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
        }
         let conf1 = {
         protocol:this.$store.state.protocol, //http: or https:
         host:wsroot, //localhost:8080
         rootpath:'/', // '/'
         callback:this.EventCB, 
         userdata: null, // user data
         session: this.$store.state.token //session got from login	
         };
         console.log(conf1)
         this.e1 = new H5sEvent(conf1);
         this.e1.connect();
     },
       
      EventCB(event, userdata){
            console.log("Event callback ", event);
            var msgevent = JSON.parse(event);
            console.log("****",msgevent)
			if(msgevent.type=="H5S_EVENT_SEND_CONFERENCE"){
                this.meettoken=msgevent.sendConference.token;
                console.log("****",msgevent)
                this.showevent()
      }else if(msgevent.type=="H5S_EVENT_START_SHARE_DESKTOP"){
				        // this.sharedstart=msgevent.shareDesktop.token;
				        // console.log("****",msgevent)
			}else if(msgevent.type=="H5S_EVENT_STOP_SHARE_DESKTOP"){
				        // this.sharedstop=msgevent.stopShareDesktop.token;
			        	// console.log("****",msgevent)
			}	
		},
    }
}
</script>

<style scoped>
.show{
   width: 100%;
   height:100%;
}
.onetoonecontentmoadl{
    --background:#282828;
}
.oneTooneposition{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.onetoonemoald{
    width:50%;
    height: 25%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #282828;
    z-index:10001 !important;
    /* display:none; */
}
.onetooneconfercenum{
    --background:transparent;
    --color:#FFFFFF ;
    font-size: 18px;
    /* margin-bottom:5px; */
    text-align: center;
 }
.onecancelbtn{
    width: 90px;
    height: 40px;
}
.camer-switchitem{
    --background:transparent;
    --color:#FFFFFF;
    --min-height:20px;
    font-size: 18px;
    width:260px;
    --padding-start:18px;
    margin: 0 auto;
}
ion-backdrop {
    opacity: 0.6;
}
.backdrop{
    display: none;
}
</style>