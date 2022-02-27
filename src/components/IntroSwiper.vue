<template>
  <div class="wrap-swiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(video, i) in videoLink" :key="i">
        <div class="img-slide" >
          <img @click="videoOpen = video ,isOpenVideo = true" :src="`https://i.ytimg.com/vi/${video}/maxresdefault.jpg`" >
          <div @click="videoOpen = video ,isOpenVideo = true" class="img-play"></div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-if="isOpenVideo" class="wrap-modal" @click="isOpenVideo = false">
      <div class="modal-video">
          <iframe width="854" height="480" :src="`https://www.youtube.com/embed/${videoOpen}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'


  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        videoLink: ['SO__VQZirJ4', 'dzpmNU8WJVg', 'HnElxo1lghU', 'EiAhMr6IJTQ','OrZ8RbXwoK4','GJiO22r9418'],
        isOpenVideo: false,
        videoOpen: "",
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          },
        }
      
      }
    },
  }
</script>

<style>
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: transparent url('../img/item/page_off.png') center/cover no-repeat;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: transparent url('../img/item/page_on.png') center/cover no-repeat;
    background-size: cover;
  }
</style>

<style scoped>
  .wrap-swiper {
    padding: 0 60px;
    padding-bottom: 40px;
  }

  .img-slide {
    position: relative;
    width: 76%;
    display: block;
    margin: auto;
    border: 20px double;
    border-image: url('../img/item/border.png') 38 round;
    position: relative;
    cursor: pointer;
  }

  .img-slide img {
    width: 100%;
    height: 100%;
  }

  .img-play {
    background: url('../img/item/play.png') center / contain no-repeat;
    height: 76px;
    width: 76px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    z-index: 10;
    filter: brightness(2.0);
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-container {
    padding: 40px 0;
  }

  .wrap-modal {
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 20;
  }

  .modal-video {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 854px;
    height: 480px;
    transform: translateY(-50%) translateX(-50%);
    background-color: #fff;
    z-index: 9999;
  }

</style>