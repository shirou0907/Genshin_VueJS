<template>
  <div id="app">
    <HeaderPC v-responsive.lg.xl></HeaderPC>
    <HeaderMobile v-responsive.sm.xs></HeaderMobile>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderPC from './components/Layout/HeaderPC'
  import HeaderMobile from './components/Layout/HeaderMobile'
  import Footer from './components/Layout/Footer'
  export default {
    components: {
      HeaderPC,
      HeaderMobile,
      Footer
    },
    data() {
      return {
        mobileView: false,
      }
    },
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 1024;
      },
    },
    created() {
      this.handleView();
      console.log(this.mobileView)
    }

  }
</script>

<style>
  #app {
    font-family: Tahoma, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @import '~bootstrap/dist/css/bootstrap.css';
</style>