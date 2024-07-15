<template>
  <div id="app">
    <Header v-show="!this.$route.meta.show"></Header>
    <router-view></router-view>
    <Footer v-show="!this.$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 1366px;
}
</style>
