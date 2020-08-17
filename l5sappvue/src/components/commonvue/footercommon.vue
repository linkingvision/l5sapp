<template>
 <ion-footer class="footerposition">
     <ion-toolbar class="footer">
            <div class="footerbgc">
                <ion-buttons class="footerbuttons">
                        <ion-button class="btnone" @click="conference()">
                            <img src="../../assets/imgs/footerfirst.png" alt="">
                        </ion-button>
                        <ion-button class="btnone" @click="onetoonevideo()">
                            <img src="../../assets/imgs/dianduidian--2@2x.png" alt="">
                        </ion-button>
                        <ion-button class="btnone">
                            <img src="../../assets/imgs/shezhi_guanli-2@2x.png" alt="">
                        </ion-button>
                        <ion-button  class="btnone">
                            <img src="../../assets/imgs/yonghu-8@2x.png" alt="">
                        </ion-button>
                </ion-buttons>
            </div>
      </ion-toolbar>
      <ion-fab vertical="bottom" 	horizontal='center' slot="fixed" class="fabfooter">
            <ion-fab-button class="fabfooterbtn">
                <img src="../../assets/imgs/middleimg.png" alt="">
            </ion-fab-button>
       </ion-fab>
   </ion-footer>
</template>

<script>
export default {
 data(){
    return{

    } 
},
 methods: {
     conference(){
         console.log(this.$router.history.current.name)
         if(this.$router.history.current.name!='Conference'){
             this.$router.push('/Conference')
         }else{
                return false
          }
    },
     onetoonevideo(){
         console.log(1)
         this.$router.push('/Onetoonevideo')
     }
   }
}
</script>

<style scoped>
.footerposition{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}
.footer{
     --background:transparent;
     --border-color:#000000;
     --padding-top:0;
     --padding-bottom:0;
     --min-height:85px !important;
}
 .fabfooter{
     bottom:53px;
     padding-left:20px;
}
 .fabfooterbtn{
     --background:transparent;
     width:90px;
     height:90px;
}   
 .fabfooter img{
     display: block;
     width:100%;
     height:100% !important;
     /* margin-right:8px; */
 }
.footerbgc{
     width: 100%;
     height: 85px;
     background: url('../../assets/imgs/footerbgc@2x.png') no-repeat;
     background-size:100% 100%;
  }
.footerbuttons{
     height: 100%;
  }
.footerbuttons img{
     display: block;
     width: 35px;
     height: 35px;
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
 
</style>