<template>
   <div class="conference">
       <!-- 头部 -->
      <ion-header class="conference-header">
         <ion-toolbar class="conference-toobar">
               <!--最近会议-->
               <ion-list class="conference-list" lines='none'>
                    <ion-list-header lines="full" class="list-header">
                        <ion-label>最近会议</ion-label>
                    </ion-list-header>  
                    <ion-item class="conference-item"  button detail='true' lines="none">
                        <div class="recent-bacground">
                            <ion-label class="conference-itemlabel">
                                <h3>‘视频会议’于2020.0718 20：00：00即将开始</h3>
                                <p>会议号：08808</p>
                            </ion-label>
                        </div>
                    </ion-item>
                </ion-list>

                <!-- 创建和加入会议 -->
                <ion-grid>
                <ion-row>
                    <ion-col size='6' class="conference-col">  
                         <ion-item class="conference-start" button lines='none' detail='false' @click="createdconference()">
                              <ion-label>创建会议</ion-label>
                              <ion-button>+</ion-button>
                         </ion-item>
                    </ion-col>
                    <ion-col size='6' class="conference-col">
                          <ion-item class="conference-start" button lines='none'>
                              <ion-label>加入会议</ion-label>
                              <ion-button>></ion-button>
                         </ion-item>
                    </ion-col>
                </ion-row> 
            </ion-grid>
               <!--标题头 -->
            <ion-list class="conference-list" lines='none'>
                <ion-list-header lines="full" class="list-header">
                    <ion-label>待办会议</ion-label>
                </ion-list-header>
            </ion-list>
          </ion-toolbar>
       </ion-header>
       
       <!-- 身体 -->
       <ion-content class="conference-content">
             <!-- 待办会议-->
            <ion-list class="conference-list" lines='none'>
                 <ion-item class="conference-action-item" button lines="none" detail='false'>
                        <div class="civ">
                            <ion-label class="action-label">
                                <h3 >
                                    L5S会议视频平台
                                    <ion-fab vertical="top" horizontal="end" class="label-ing">
                                    <ion-label color='primary'>.进行中</ion-label>
                                    </ion-fab>
                                </h3>
                                <p>视频技术交流会议</p>
                                <h4>日期：2020.0908 20：30：00</h4>
                                <h4>会议号：0805855</h4>
                                <ion-fab vertical="bottom" horizontal="end" class="actrion-button">
                                    <ion-fab-button class="actrion-fabbtn">></ion-fab-button>
                                </ion-fab>
                            </ion-label>
                        </div>
                    </ion-item>
            </ion-list>
        </ion-content>
         <!--底部 -->
        <ion-footer>
            <ion-toolbar class="footer">
                <footertabs></footertabs>
            </ion-toolbar>
            <ion-fab vertical="bottom" 	horizontal='center' slot="fixed" class="fabfooter">
                <ion-fab-button class="fabfooterbtn">
                    <img src="../assets/imgs/middleimg.png" alt="">
                </ion-fab-button>
            </ion-fab>
        </ion-footer>
   </div>
</template>

<script>
export default {
 data(){
     return{

     }
 },
 methods:{
     createdconference(){
         console.log(1)
         this.$router.push('/Createdconference')
     },
     
  }
}
</script>

<style scoped>
 .conference{
    width:100%;
    height: 100%;
    margin: 0;
    padding: 0;
 }
 /* 头部 */
 .conference-toobar{
    --background:#000000;
}
 .conference-title{
    --color:#FEFEFE;
    text-align: left;
 }

 /* 主体部分 */
.conference-content{
    width: 100%;
    height: 86%;
    --background:#000000;
    padding: 0;
    margin: 0;
    --padding-start:0;
    --padding-top:0;
    --padding-bottom:0;
    margin: 0;
}   
.conference-list{
     background-color:#000000;
     margin: 0;
     padding: 0;
}
.list-header{
     --background:#000000;
     --color: #D3D3D3;
     font-size: 20px;
     font-weight: 600;
} 
.conference-item{
     --background:#000000;
     --color:#D3D3D3;
     --min-height:150px;
     --color-activated:#1562FF !important;
     --background-activated:#1562FF;
}
.conference-itemlabel h3{
     color: #F8F8F8;
     font-size: 16px;
}
.conference-itemlabel p{
     color: #9A9A9A;
     font-size: 16px;
}
.recent-bacground{
     width:100%;
     height: 100%;
     background: url('../assets/imgs/conference.png') no-repeat;
     background-size:100% 100%;
     text-indent: 1em;
     display: flex;
     align-items: center;
}
.conference-col{
     --ion-grid-column-padding:25px;
} 
.conference-start{
     --background:#383838;
     --min-height:65px;
     --color:#F8F8F8;
     --border-radius:8px;
     font-size: 16px;
     --color-activated:#1562FF !important;
     --background-activated:#1562FF;
}
.conference-action-item{
     --background:#000000;
     --color:#D3D3D3;
     --min-height:250px;
     margin-bottom:25px;
     --color-activated:#1562FF !important;
     --background-activated:#1562FF;
}
.civ{
    width:100%;
    height: 100%;
    background-color: #212121;
    text-indent: 1em;
    border-radius: 8px;
    display: flex;
    align-items: center;
}
.conference-group{
     background-color:#212121;
     margin:0 30px;
     border-radius:8px;
}
.action-label{
     width:100%;
}
.action-time{
    width:100%;
}
.action-label h3{
    font-size: 30px;
    color:#F8F8F8;
    line-height:50px;
    text-align: left;
    font-weight: 600;
}
.action-label p{
    font-size: 5px;
    color:#F8F8F8;
    margin-bottom: 35px;
    font-weight: 600;
}
.action-label h4{
    color:#999999;
    font-size: 12px;
}
.actrion-button{
    right:60px;
}
.action-note{
    right: 0;
}
.actrion-fabbtn{
    width:75px;
    height: 75px;
    --background:#383838;
}
.label-ing{
    font-size: 8px;
    right: 60px;
    vertical-align: middle;
    padding-top:10px;
    font-weight: 600;
}
.contenconference{
    --min-height:100%;
}
 /* 底部 */
 .footer{
     --background:#000000;
     --border-color:#000000;
     --padding-top:0;
     --padding-bottom:0;
     --min-height:100%;
}
 .fabfooter{
     bottom:16px;
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
     /* margin-right:8px; */
 }
</style>