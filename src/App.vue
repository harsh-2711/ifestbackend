<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    /*margin-top: 60px;*/
  }

  body {
    padding: 0px;
    margin: 0px;
  }
</style>
