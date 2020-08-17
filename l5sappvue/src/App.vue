<template>
  <div id="app">
      <ion-app>
          <ion-vue-router />
      </ion-app>
       <toobars v-if="$route.meta.footShow" class="toobar"></toobars>
       <eventLists v-if="$route.meta.eventshow"></eventLists> 
  </div>
</template>

<script>
import Toobar from '@/components/commonvue/footercommon.vue'
export default {
  name: 'App',
  components:{
     'toobars':Toobar,
  },
  data(){
    return {
        
     }
  },
  mounted() {
      window.addEventListener('unload',this.saveState)
  },
  methods: {
    saveState(){
      localStorage.setItem("state",JSON.stringify(this.$store.state))
    }
  },
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
}
#app {
  width:100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.toobar{
  z-index: 0;
}
</style>
