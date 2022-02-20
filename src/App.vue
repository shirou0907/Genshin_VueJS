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
    components: {
      Header,
      Footer
    },
  }
</script>

<style>
  #app {
    font-family: Tahoma, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  @import '~bootstrap/dist/css/bootstrap.css';
</style>