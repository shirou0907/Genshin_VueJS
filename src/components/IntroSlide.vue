<template>
  <div class="wrap-swiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(img, i) in imgs" :key="i">
        <img class="img-slide" :src="require(`../img/map/${img}.jpg`)" >
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
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
        imgs: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8'],
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
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
    width: 80%;
    display: block;
    margin: auto;
    border-radius: 4px;
  }

  .img-character {
    position: absolute;
    top: 0;
    right: 40px;
    opacity: 0;
    transition: opacity 1s;
  }

  .img-character-active {
    opacity: 1;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-container {
    padding: 40px 0;
  }

  .swiper-button-prev, .swiper-button-next {
    width: 80px;
    height: 60px;
    transition: transform linear .3s;
  }

  .swiper-button-prev:hover {
    transform: translateX(-10px);
  }

  .swiper-button-next:hover {
    transform: translateX(10px);
  }

  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: "";
    width: 80px;
    height: 60px;
    background: url('../img/item/next.png') center / cover no-repeat;
  }

  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: "";
    width: 80px;
    height: 60px;
    background: url('../img/item/prev.png') center / cover no-repeat;
  }

</style>