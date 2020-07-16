<template>
     <div class="Videoconference">
        <!-- <ion-header></ion-header> -->
        <ion-content class="videocontent">
             <ion-grid>
                  <ion-row class="herderrow">
                       <ion-col>
                           <ion-label class="videolabel">
                               <h3>点对点视频会议</h3>
                                <p>会议号：2344</p>
                           </ion-label>
                        </ion-col>
                       <ion-col>
                          <ion-button class="videobutton">
                              <ion-label shape="round">离开</ion-label>
                          </ion-button>
                       </ion-col>
                  </ion-row>
                  <ion-row>
                      <ion-col>
                           <video src=""></video>
                      </ion-col>
                  </ion-row>
             </ion-grid>
             <!-- 要是提醒 -->
             <ion-fab vertical="center" horizontal="start" slot="fixed" class="notifications">
                <ion-chip class="notificationsbtn">
                    <ion-avatar>
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                    </ion-avatar>
                    <ion-label>重要提醒</ion-label>
                </ion-chip>
             </ion-fab>
              <!-- 消息 -->
             <ion-fab vertical="center" horizontal="start" slot="fixed">
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
             </ion-fab>
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
                <ion-fab-button class="videobottombtn">
                    
                </ion-fab-button>
             </ion-fab>
              <!-- 共屏 -->
             <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="totalscreen">
                <ion-fab-button class="totalscreenbtn">
                    
                </ion-fab-button>
             </ion-fab>
        </ion-content>
        <ion-footer></ion-footer>
     </div>
</template>

<script>
export default {

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
</style>>
