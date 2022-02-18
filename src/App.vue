<template>
  <div id="app">
      <Header></Header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'
export default {
  components: {Header, Footer},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>
