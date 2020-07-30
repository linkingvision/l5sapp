<template>
   <div class="footerbgc">
        <ion-buttons class="footerbuttons">
            <ion-button class="btnone" @click="Conference()">
                <img src="../../assets/imgs/footerfirst.png" alt="">
            </ion-button>
            <ion-button class="btnone">
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
</template>

<script>
export default {
 data(){
    return{

    } 
},
 methods: {
     Conference(){
         console.log(1)
         this.$router.push('/Conference')
     }
 }
}
</script>

<style scoped>
.footerbgc{
     width: 100%;
     height: 100%;
     background: url('../../assets/imgs/footerbgc@2x.png') no-repeat;
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
</style>