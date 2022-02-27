<template>
    <div class="home">
        <div class="app-trailer">
            <div v-responsive.lg.xl class="wrapVideo">
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

            <div class="home-main">
                <img src="https://genshin.hoyoverse.com/_nuxt/img/09cac33.png" alt="" class="main-img">
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
                <div class="wrap-land">
                    <div class="map-title">
                        Vui lòng đợi
                    </div>
                    <div class="map-character">
                       <img src="../img/item/hutao.png" alt="">
                    </div>
                    <div class="map-land" style="background: url('https://genshin.hoyoverse.com/_nuxt/img/b57475e.jpg') center / cover no-repeat"></div>
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

        <div class="home-game">
            <div class="home-title">
                Cấu hình yêu cầu
            </div>
            <div class="home-option">
                <div v-for="(option, i) in options" :key ="i" 
                class="option-item" 
                :class="{'option-active': option.isChoose}"
                @click="choose= option.name, changeActive(), option.isChoose = true">
                {{option.name}}
                </div>
            </div>
            <div class="option-description">
                <HomeOption :option="choose"/>
            </div>
        </div>

    </div>
</template>

<script>
    import HomeOption from './HomeOption.vue'
    export default {
        components: {HomeOption},
        data() {
            return {
                showContact: true,
                enableContact: false,
                options: [
                        {name: 'Window', isChoose: true},
                        {name: 'Android', isChoose: false},
                        {name: 'iOS', isChoose: false}
                    ],
                choose: 'Window',
            }
        },
        activated() {
            this.$refs.videoRef.play()
        },
        methods: {
            handleScroll() {
                this.enableContact = window.scrollY > 200;
            },
            changeActive() {
                this.options.forEach(e=> {
                    e.isChoose = false
                })
            },
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

    .home-main {
        min-height: 100vh;
        background: url('../img/mobile_home.jpg') center / cover  no-repeat;
    }

    .main-img {
        width: 100%;
        padding-top: 120px;
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
        box-shadow: 0 1px 1px #000;
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
        cursor: pointer;
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
        cursor: pointer;
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
        border: 12px solid #fff;
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

    .home-game {
        min-height: 100vh;
        background-color: #f0f0f0;
    }

    .home-title {
        text-align: center;
        font-size: 52px;
        font-weight: bold;
        padding-top: 60px;
    }

    .home-option {
        display:flex;
        justify-content: center;
    }

    .option-item {
        margin-top: 30px;
        padding: 0 30px;
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        color: #999;
        border-bottom: 6px solid #ccc;
        transition: all linear .1s;
    }

    .option-active {
        color: #000;
        font-weight: 550;
        border-bottom: 6px solid #000;
    }
    
    @media only screen and (max-width: 600px) {
        .option-item {
            font-size: 16px;
        }

        .wrap-option {
            padding: 60px 20px;
        }
    }
</style>
