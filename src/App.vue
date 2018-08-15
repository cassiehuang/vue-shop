<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.isKeepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.isKeepAlive" />
  </div>
</template>

<script>
import './assets/font/iconfont.js'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgb(244, 244, 244);
}
* {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a:hover,
a:active,
a:link {
  text-decoration: none;
}
input {
  border: none;
  font-size: 16px;
  background: none;
  -webkit-appearance: none;
  outline-style: none;
}
</style>
