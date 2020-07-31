<template>
   <div class="createdconference">
       <!-- 头部 -->
      <ion-header class="created-header">
          <ion-toolbar class="created-header-toolbar">
             <ion-title class="created-title">创建会议</ion-title>
          </ion-toolbar>
     </ion-header> 
      <!--身体 -->
      <ion-content class="created-content">
          <ion-item lines="none" class="created-item">
              <ion-label class="created-label">会议名称</ion-label>
              <ion-input class="created-input"></ion-input>
          </ion-item>
          <ion-item lines="none" class="created-item">
              <ion-label class="created-label">开始时间</ion-label>
              <ion-datetime 
                  class="created-datetime"
                  display-format="YYYY-MMM-D H:mm" 
                  month-short-names="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12"
                  done-text='确定'
                  cancel-text='返回'
                  min="2016" max="2030" value="2020-06-17T11:06Z"></ion-datetime>
          </ion-item>
          <ion-item lines="none" class="created-item">
               <ion-label class="created-label">结束时间</ion-label>
               <ion-datetime 
                  class="created-datetime"
                  display-format="YYYY-MMM-D H:mm" 
                  month-short-names="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12"
                  done-text='确定'
                  cancel-text='返回'
                  min="2016" max="2030" value="2020-06-17T11:06Z"></ion-datetime>
          </ion-item>
          <ion-grid>
               <ion-row>
                   <ion-col class="created-col">
                       <ion-radio-group value="grape" class="radio-group">
                            <ion-radio class="cread-checkbox" slot="start"  value="apple"></ion-radio>
                            <ion-label class="moshi-one">1+N模式</ion-label>
                            
                            <ion-radio slot="start" class="cread-checkbox-two" value="grape"></ion-radio>
                            <ion-label class="moshi">等分模式</ion-label>
                       </ion-radio-group>
                   </ion-col>
               </ion-row>
          </ion-grid>
          <ion-item lines="none" class="created-item">
              <ion-label class="created-selectlabel">1+N模式</ion-label>
              <ion-input class="select-input">
                    <ion-select interface="popover" class="created-select" slot="end">
                            <ion-select-option value="nes">NES</ion-select-option>
                            <ion-select-option value="n64">Nintendo64</ion-select-option>
                    </ion-select>
              </ion-input>
           </ion-item>
           <ion-grid>
               <ion-row>
                    <ion-col class="created-col">
                       <ion-radio-group value="grape" class="radio-group">
                            <ion-radio class="cread-checkbox" slot="start"  value="apple"></ion-radio>
                            <ion-label class="moshi-one">会议成员</ion-label>
                            
                            <ion-radio slot="start" class="cread-checkbox-two" value="grape"></ion-radio>
                            <ion-label class="moshi">会议设备</ion-label>
                        </ion-radio-group>
                    </ion-col>
               </ion-row>
          </ion-grid>
          <ion-item lines="none" id="item-margin" class="created-item">
              <ion-label class="created-label">会议成员</ion-label>
              <ion-input class="select-input">
                  <ion-select interface="popover" class="created-select" slot="end">
                      <ion-select-option value="nes">NES</ion-select-option>
                      <ion-select-option value="n64">Nintendo64</ion-select-option>
                  </ion-select>
               </ion-input> 
          </ion-item>
          <ion-item lines="none" class="created-item">
              <ion-label id="resolution" class="created-labelresolution">分辨率</ion-label>
              <ion-input class="select-input">
                    <ion-select interface="popover" class="created-select" slot="end">
                        <ion-select-option value="nes">NES</ion-select-option>
                        <ion-select-option value="n64">Nintendo64</ion-select-option>
                    </ion-select>
               </ion-input>
          </ion-item>
          <ion-item lines="none" class="created-item">
              <ion-label class="created-label">是否开启会议</ion-label>
              <ion-toggle></ion-toggle>
          </ion-item>
      </ion-content>
   </div>
</template>

<script>
export default {
  name:'createdconference',
  data(){
      return{

      }
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>

<style scoped>
.createdconference{
    width:100%;
    height: 100%;
    background-color: rgb(32, 31, 31);
}
.created-header-toolbar{
    --background:#161616;
}
.created-title{
    --color:#FFFFFF;
    font-weight:600;
  }
.created-content{
    --background:#000000;
}
.created-item{
    --background:#000000;
    --color:#FFFFFF;
    /* margin-bottom: 10px; */
}
.created-item#item-margin{
    margin-bottom: 10px;
}
.created-item:nth-child(1){
    margin-top:40px;
}
.created-input{
    --background:#131313;
    border-radius: 8px;
    margin-left: 30px;
    --color:#9A9A9A;
    font-size: 8px;
}
.created-label{
    font-size:18px;
    font-weight: 600;
}
.created-labelresolution{
    font-size:18px;
    font-weight: 600;
    /* margin-left: 35px;; */
}
.created-selectlabel{
    font-size:18px;
    font-weight: 600;
    /* width: 100px;; */
}
.created-datetime{
    color:#9A9A9A ;
    font-size: 8px;
}
.moshi-one{
    color:#FFFFFF;
    font-size:18px;
    font-weight: 600;
    margin-right: 50px;
}
.moshi{
    color:#FFFFFF;
    font-size:18px;
    font-weight: 600;
}
.moshi:nth-child(1){
    margin-right:50px;
}
.cread-checkbox{
    vertical-align: middle;
   --color:#818181;
   --color-checked:#0B62FF;
}
.cread-checkbox-two{
    vertical-align: middle;
   --color:#818181;
   --color-checked:#0B62FF;
   margin-left: 50px;
}
.created-select{
    width:100%;
    border-radius:0px 10px 10px 0;
    --background:#131313;
    background-color:#131313;
    margin: 0;
    margin-left:20px;
    padding: 0;
}
.select-input{
    --background:#131313;
    border-radius:10px 0 0 10px;
    margin-left: 30px;
    height: 80px;
    width: 100%;
    --color:#9A9A9A;
    font-size: 8px;
    justify-content: right;
}
</style>