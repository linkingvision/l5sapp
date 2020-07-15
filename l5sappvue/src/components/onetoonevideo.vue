<template>
  <div class="hello">
      <ion-header class="helo-header">
         <ion-toolbar class="helo-header-toolbar">
             <ion-title class="helo-title">视频对讲</ion-title>
          </ion-toolbar>
      </ion-header> 
      <ion-content class="hello-content">
         <ion-list class="list-content">
             <ion-list-header lines="full" class="list-header">
                 <ion-label>在线联系人</ion-label>
              </ion-list-header>  
              <ion-item class="list-item">
                <img src="../assets/imgs/user.png" alt="">
                <ion-label>Pokémon Yellow</ion-label>
              </ion-item>
              <ion-item class="list-item">
                <img src="../assets/imgs/user.png" alt="">
                <ion-label>Mega Man X</ion-label>
              </ion-item>
          </ion-list>
          <ion-fab vertical="bottom" 	horizontal='center' slot="fixed" class="fabfooter">
                <ion-fab-button class="fabfooterbtn">
                   <img src="../assets/imgs/middleimg.png" alt="">
                </ion-fab-button>
          </ion-fab>
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
          </ion-toolbar>
      </ion-footer>
      
  </div>
</template>

<script>
export default {
  name: 'onetoonevideo',
  data () {
    return {
        
    } 
  },
   methods: {
     
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
    --background:#000000;
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
 </style>
