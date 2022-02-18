<template>
    <div class="home">
        <div class="app-trailer">
            <div class="wrapVideo">
                <video ref="videoRef" class="openingVideo" muted="muted" loop="loop" autoplay="true">
                    <source src="../img/video.mp4" type="video/mp4">
                </video>
                <div class="video-info">
                    <div class="video-title">
                        <div style="font-size: 36px; text-align: center">Chính thức ra mắt trên nhiều nền tảng, đến tải
                            ngay</div>
                    </div>
                    <div class="video-download">
                        <a target="_blank" href="https://www.playstation.com/en-us/games/genshin-impact/">
                            <img class="video-download-img" src="../img/item/ps4.png">
                        </a>
                        <a target="_blank" href="https://apps.apple.com/app/id1517783697">
                            <img class="video-download-img" src="../img/item/apple.png">
                        </a>
                        <a target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact">
                            <img class="video-download-img" src="../img/item/ggplay.png">
                        </a>
                        <a target="_blank"
                            href="https://sg-public-api.hoyoverse.com/event/download_porter/link/ys_global/genshinimpactpc/default">
                            <img class="video-download-img" src="../img/item/window.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="home-slide">
            <div class="home-land">
                <div class="wrap-land">
                    <div class="map-title">
                        Mondstadt
                    </div>
                    <div class="map-character">
                        <img src="../img/item/modstard.png" alt="">
                    </div>
                    <div class="map-land"
                        style="background-image: url('https://uploadstatic-sea.hoyoverse.com/contentweb/20200211/2020021114275255981.jpg')">
                    </div>
                </div>
                <div class="wrap-land">
                    <div class="map-title">
                        Liyue
                    </div>
                    <div class="map-character">
                        <img src="../img/item/liyue.png" alt="">
                    </div>
                    <div class="map-land"
                        style="background-image: url('https://uploadstatic-sea.hoyoverse.com/contentweb/20200526/2020052612372361982.jpg')">
                    </div>
                </div>
                <div class="wrap-land">
                    <div class="map-title">
                        Inazuma
                    </div>
                    <div class="map-character">
                        <img src="../img/item/inazuma.png" alt="">
                    </div>
                    <div class="map-land"
                        style="background-image: url('https://uploadstatic-sea.hoyoverse.com/contentweb/20210720/2021072015230536749.jpg')">
                    </div>
                </div>
            </div>

            <div class="home-contact" :class="{'home-contact--in' : showContact, 'hide': !enableContact}">
                <div class="home-contact-button" @click="showContact=!showContact"><i v-if="showContact"
                        class="fa-solid fa-angles-right"></i><i v-if="!showContact" class="fa-solid fa-angles-left"></i>
                </div>
                <div class="contact-icon">
                    <a class="icon-link" target="_blank" href="https://www.facebook.com/GenshinImpact.vi/"><i
                            class="fab fa-facebook"></i>Facebook</a>
                </div>
                <div class="contact-icon">
                    <a class="icon-link" target="_blank" href="https://twitter.com/GenshinImpact"><i
                            class="fab fa-twitter"></i>Twitter</a>
                </div>
                <div class="contact-icon">
                    <a class="icon-link" target="_blank" href="https://www.youtube.com/c/GenshinImpact"><i
                            class="fab fa-youtube"></i>YouTube</a>
                </div>
                <div class="contact-icon">
                    <a class="icon-link" target="_blank" href="https://www.instagram.com/genshinimpact/"><i
                            class="fab fa-instagram"></i>Instagram</a>
                </div>
                <div class="contact-icon">
                    <a class="icon-link" target="_blank" href="https://github.com/shirou0907"><i
                            class="fab fa-github"></i>Github</a>
                </div>
            </div>
        </div>

        <div class="home-view">
            <div class="wrap-swiper">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="(img, i) in imgs" :key="i">
                        <img class="img-slide" :src="require(`../img/${img}.jpg`)">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
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
                showContact: true,
                enableContact: false,
                imgs: ['modstard', 'liyue', 'inazuma'],
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
        activated() {
            this.$refs.videoRef.play()
        },
        methods: {
            handleScroll() {
                this.enableContact = window.scrollY > 200;
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .openingVideo {
        object-fit: cover;
        width: 100%;
        height: 100vh;
    }

    .wrapVideo {
        position: relative;
        height: 100vh;
    }

    .video-info {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .video-title {
        color: #fff;
        text-shadow: 0 0 10px rgb(114 71 21 / 68%), 0 0 10px rgb(114 71 21 / 68%);
        margin-bottom: 20px;
    }

    .video-download {
        display: flex;
        justify-content: space-between;
    }

    .video-download-img {
        display: block;
        margin: 0 20px;
    }

    .video-download-img:hover {
        opacity: .9;
    }

    .home-slide {
        position: relative;
    }

    @keyframes fadeIn {
        from {
            right: -200px
        }

        to {
            right: -20px
        }
    }

    @keyframes fadeOut {
        from {
            right: -20px
        }

        to {
            right: -200px
        }
    }

    .home-contact {
        position: fixed;
        z-index: 10;
        top: 24vh;
        border-radius: 4px;
        padding: 10px 0;
        right: -200px;
        width: 200px;
        transition: opacity 1s;
        opacity: 1;
        background-color: #f0f0f0;
        animation: fadeOut ease-in-out .4s;
    }

    .hide {
        opacity: 0;
    }

    .home-contact-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 60px;
        background-color: #393b40;
        color: #f4d8a8;
        position: absolute;
        top: 10px;
        left: -32px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .home-contact--in {
        display: block;
        right: -20px;
        animation: fadeIn ease-in-out .4s;
    }

    .icon-link {
        text-decoration: none;
        display: flex;
        padding: 8px 12px;
        width: 100%;
        color: #333;
    }

    .icon-link:hover {
        background-color: #393b40;
        color: #f4d8a8;
    }

    .icon-link i {
        font-size: 24px;
        margin-right: 10px;
    }

    .wrap-land {
        height: 240px;
        width: 100%;
        background: center/cover no-repeat;
        overflow: hidden;
        position: relative;
    }

    .map-land {
        height: 100%;
        width: 100%;
        transition: all linear .3s;
    }

    .wrap-land:hover .map-character {
        opacity: 1;
    }

    .wrap-land:hover .map-land {
        transform: scale(1.05);
    }

    .map-character {
        position: absolute;
        right: -240px;
        bottom: 0;
        opacity: 0;
        transition: all linear .5s;
        z-index: 10;
    }

    .map-title {
        position: absolute;
        text-align: center;
        left: 100px;
        top: 100px;
        font-size: 36px;
        color: #fff;
        text-shadow: 0 0 10px rgb(114 71 21 / 68%), 0 0 10px rgb(114 71 21 / 68%);
        z-index: 10;
    }

    .wrap-swiper {
        padding: 0 60px;
        padding-bottom: 40px;
        background: url('../img/background4.png') center / cover no-repeat;
    }

    .img-slide {
        width: 70%;
        display: block;
        margin: auto;
        border-radius: 4px;
        filter: brightness(1.5);
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

    .swiper-container {
        padding: 40px 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
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

    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after {
        content: "";
        width: 80px;
        height: 60px;
        background: url('../img/item/next.png') center / cover no-repeat;
    }

    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
        content: "";
        width: 80px;
        height: 60px;
        background: url('../img/item/prev.png') center / cover no-repeat;
    }
</style>

<style>
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 0;
    }

    .swiper-pagination-bullet {
        bottom: 0;
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