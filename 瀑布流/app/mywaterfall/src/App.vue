<template>
  <div id="app">
<vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "App",
  components: {
    vueWaterfallEasy
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
