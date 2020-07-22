<template>
  <div id="app">
       <ion-app>
          <ion-vue-router />
      </ion-app>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
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
</style>
