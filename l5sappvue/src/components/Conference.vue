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
                                <h3>‘视频会议’于{{daterecent.beginTime}}即将开始</h3>
                                <p>会议号：{{daterecent.strToken}}</p>
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
                          <ion-item class="conference-start" button lines='none' @click="openModal()">
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
                 <ion-item class="conference-action-item" button lines="none" detail='false' v-for="(item,index) in meetdata" :key="index" @click="mettevent()">
                        <div class="civ">
                            <ion-label class="action-label">
                                <h3 >
                                    L5S会议视频平台
                                    <ion-fab vertical="top" horizontal="end" class="label-ing">
                                        <ion-label color='success' v-if="item.bStartStatus">.进行中</ion-label>
                                        <ion-label color='primary' v-if="!item.bStartStatus">筹备中</ion-label>
                                    </ion-fab>
                                </h3>
                                <p>视频技术交流会议</p>
                                <h4>日期：{{item.beginTime}}</h4>
                                <h4>会议号：{{item.strToken}}</h4>
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
        <!-- 弹窗 -->
        <div class="joinconference">
            <p class="title" lines="none">
                请输入会议号
            </p>
            <ion-input v-model="conference" class="maltaiinput" :value='joinusertoken' @ionChange="joinusertoken=$event.target.value"></ion-input>
            <div class="maltaibtn">
                <ion-button class="cancelbtn" shape="round" @click="cancelbtn()">取消</ion-button>
                <ion-button class="okeybtn" shape="round" @click="okeybtn()">确定</ion-button>
            </div>
        </div>
   </div>
</template>
<script>
// import { Component, Vue } from 'vue-property-decorator';

export default {
 data(){
     return{
         meetdata:[],
         daterecent:[],
         conference:'',
         joinusertoken:''
     }
 },
 mounted(){
    this. meetingdata()
    $('.joinconference').hide()
 },
 methods:{
    createdconference(){
         console.log(1)
         this.$router.push('/Createdconference')
     },
    //会议开始播放
    mettevent(jointoken){
       var url = this.$store.state.callport + "/api/v1/GetConference?session="+ this.$store.state.token;
            this.$http.get(url).then(result=>{
                if(result.status==200){
                    console.log(result)
                    var data=result.data.conference
                    for(var i=0;i<data.length;i++){
                        if(jointoken==data[i].strToken){
                            if(data[i].bStartStatus){
                                console.log(data[i].bStartStatus)
                                $('.joinconference').hide()
                                console.log('#ddd')
                                return false
                                // this.$router.push({
                                //     name: `Participants`,
                                //     path: 'Participants',
                                //     params: {
                                //         token:usertoken
                                //     }
                                // })
                            }else{
                                this.$message('会议未开始');
                            }
                        }
                    }
                } 
         })
      },
    //加入会议模态
    openModal(){ 
        $('.conference').toggleClass("backdrop")
        if($('.joinconference').is(':hidden')){
           $('.joinconference').show()
        }else{
           $('.joinconference').hide()
        }
        
    }, 
    cancelbtn(){
        $('.joinconference').hide()
    },
    okeybtn(){
        console.log(this.joinusertoken)
        this.mettevent(this.joinusertoken)
    },
    // 获取会议
    meetingdata(){
            var url = this.$store.state.callport + "/api/v1/GetConference?session="+ this.$store.state.token;
            this.$http.get(url).then(result=>{
                if(result.status==200){
                    // this.meetdata=result.data.conference
                    console.log(result)
                   var data=result.data.conference
                    if(data.length==0){
                        return false
                    }
                    for(var i=0;i<data.length;i++){
                        // console.log("1*",data[i].strType)
                        if(data[i].strType=="temporary"){
                            continue 
                        }
                        var beginTime=new Date(data[i].beginTime).getTime();
                        var begin=new Date(data[i].beginTime);  
                        var eng=new Date(data[i].endTime)
                        console.log(eng)

                        //年月日
                        var y = begin.getFullYear();
                        var m = this.addZero(begin.getMonth()+1);
                        var d = this.addZero(begin.getDate());
                        //时分秒
                        var h = this.addZero(begin.getHours());
                        var mm = this.addZero(begin.getMinutes());
                        var rq=y+'.'+m+'.'+d+" "+h+':'+mm;
                        var listdata={
                            bStartStatus: data[i].bStartStatus,
                            beginTime: rq,
                            beginTime1: beginTime,
                            endTime: data[i].endTime,
                            mosaicSize: data[i].mosaicSize,
                            mosaicType: data[i].mosaicType,
                            nId: data[i].nId,
                            strName: data[i].strName,
                            strToken: data[i].strToken,
                            strType: data[i].strType,
                        }
                        this.meetdata.push(listdata)
                       console.log("1*",this.meetdata)
                    }
                    if(this.meetdata.length!=0){
                        this.meetdata.sort(function(a,b){
                            return  b.beginTime1-a.beginTime1
                        })
                        var daterecent=Math.round(new Date().getTime())
                        var newArr = [];
                        this.meetdata.map(function(x){
                            // 对数组各个数值求差值
                            newArr.push(Math.abs(x.beginTime1 - daterecent));
                            // console.log(newArr,x.beginTime1 - daterecent,x.beginTime1,daterecent)
                        });
                        // 求最小值的索引
                        var index = newArr.indexOf(Math.min.apply(null, newArr))
                        this.daterecent=this.meetdata[index]
                        console.log(this.meetdata[index])
                        console.log(this.daterecent,"1")
                    }
                }
            })
        },
          addZero(n){
            return n<10?"0"+n:n;
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
 .backdrop{
    width:100%;
    height: 100%;
    margin: 0;
    padding: 0;
    --background: #000000;
    /* opacity: 0.3; */
 }
 /* 头部 */
 .conference-toobar{
    --background:#000000;
}
 .conference-title{
    --color:#FEFEFE;
    text-align: left;
 }
 /* 加入弹窗 */
.joinconference{
    width:70%;
    /* height:200px; */
    background-color: #121212;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 15px;
    border-radius:20px;
    padding:15px 30px;
    z-index: 2000000000000;
}
.title{
    text-align: left;
    color: #FFFFFF;
    font-size: 20px; 
    font-weight: 600;
}
.maltaiinput{
    /* width: 80%; */
    text-align: left;
    border-radius:30px;
    --background:#303030;
    margin: 30px 0;
    color:#9A9A9A;
}
.maltaibtn{
    width:100%;
}
.cancelbtn{
    --background:transparent;
    --color:#FFFFFF;
    border: 1px solid;
    border-color:#1562FF !important;
    border-radius:50px;
    --box-shadow:0;
    margin-right: 30px;
}
.okeybtn{
    margin-left: 30px;
}
ion-backdrop {
    opacity: 0.3;
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
/* 加入会议模态框 */
</style>