<template>
    <div class="wrap-character">
        <div v-if="isLoading" id="loading-wrapper">
            <div id="loading-text">LOADING</div>
            <div id="loading-content"></div>
        </div>
        
        <div class="character-trailer">
            <transition name="slide-fade" mode="out-in">
                <div class="char-item" :key="value">
                    <div class="char-info">
                        <div class="d-flex">
                        <div class="char-info-vision"><img width=50 height=50 :src="`https://api.genshin.dev/nations/${choose.nation.toLowerCase()}/icon`" alt=""></div>
                        <div class="char-info-element"><img width=50 height=50 :src="`https://api.genshin.dev/elements/${choose.vision.toLowerCase()}/icon`" alt=""></div>
                        </div>
                        <div class="char-info-name">{{choose.name}}</div>
                        <div class="char-info-birthday">Birthday: {{choose.birthday}}</div>
                        <div class="char-info-description">{{choose.description}}</div>
                    </div>
                    <img class="char-item-img" :src="`https://api.genshin.dev/characters/${choose.name}/gacha-splash`" alt="">
                </div>
            </transition>
        </div>

        <div class="wrap-slide">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide 
                    v-for="(char, i) in chars" :key="i" class="char-slide" 
                    :class="{'char-slide-active':char.isActive}"
                >
                    <img class="char-img" 
                        :src="`https://api.genshin.dev/characters/${char.name}/icon`"
                        @click="choose = char, changeActive(), char.isActive = true, value++">

                    <div class="char-name" 
                        :class="{'char-name-active':char.isActive}">
                        {{char.name | capitalize }}
                    </div>

                    <img height=0
                    :src="`https://api.genshin.dev/characters/${char.name}/gacha-splash`">
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>

    </div>
</template>

<script>
    import axios from "axios"
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
                chars: [],
                choose: {"name":"albedo","isActive":true,"birthday":"09-13","description":"A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.","vision":"Geo","nation":"Mondstadt"},
                isLoading: true,
                value: true,
                swiperOption: {
                    slidesPerView: 7,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        methods: {
            async getData() {
                var vm = this
                vm.isLoading = true
                var res = await axios.get('https://api.genshin.dev/characters')
                vm.removeData(res.data, 'traveler-anemo', 'traveler-geo', 'traveler-electro', 'thoma', 'aloy')

                res.data.forEach(async e => {
                    var result = await axios.get(`https://api.genshin.dev/characters/${e}`)
                    vm.chars.push({
                        name: e,
                        isActive: false,
                        birthday: result.data.birthday.slice(5,10),
                        description: result.data.description,
                        vision: result.data.vision,
                        nation: result.data.nation
                    })  
                })

                this.isLoading = false
            },
            removeData(array, ...item) {
                item.forEach(e => {
                    array.splice(array.indexOf(e), 1)
                })
            },
            changeActive() {
                this.chars.forEach(e => {
                    e.isActive = false
                })
            },

        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped> 
    .wrap-character {
        min-height: 100vh;
        padding: 0 80px;
        padding-top: 120px;
        overflow: hidden;
        background: url('https://genshin.hoyoverse.com/_nuxt/img/b57475e.jpg') center / cover  no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .wrap-slide {
        padding: 0 200px;
        margin-bottom: 40px;
    }

    .char-slide {
        border-radius: 4px;
        border: 2px solid #000;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        cursor: pointer;
    }

    .char-slide:hover {
        border-color: #fff;
    }

    .char-slide-active {
        border-color: #fff;
    }

    .char-slide:hover .char-name {
        background-color: #fff;
        color: #000;
    }

    .char-name {
        padding: 6px 2px;
        width: 100%;
        text-align: center;
        background-color: #000;
        color: #fff;
    }

    .char-name-active {
        background-color: #fff;
        color: #000;
    }

    .char-img {
        width: 100%;
        height: 100%;
    }

    .character-trailer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .char-item {
        display: flex;
        justify-content: flex-end;
    }

    .char-info {
        position: absolute;
        left: 0;
        top: 50%;
        width: 400px;
        transform: translateX(300px) translateY(-60%);
    }

    .char-info-name {
        text-transform: uppercase;
        font-size: 50px;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        color: #fff;
        text-shadow: 1px 1px #000;
    }

    .char-info-birthday {
        font-size: 24px;
        width: 300px;
        height: 54px;
        display: flex;
        align-items: center;
        padding-left: 60px;
        color: #333;
        border: 1px solid rgba(0, 0, 0, 0.3);
        margin-bottom: 30px;
        background: #cca574 url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFQzIzMDNCMkJBMTFFOUIxNjhFNDEwOUE1RkEzRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENFQzIzMDRCMkJBMTFFOUIxNjhFNDEwOUE1RkEzRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0VDMjMwMUIyQkExMUU5QjE2OEU0MTA5QTVGQTNGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0VDMjMwMkIyQkExMUU5QjE2OEU0MTA5QTVGQTNGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIADYANgMBEQACEQEDEQH/xAB6AAEAAwEBAAAAAAAAAAAAAAAAAwQFBgIBAQADAQEAAAAAAAAAAAAAAAABAgMEBRAAAQMDAwMDBAMAAAAAAAAAAQACAxEEBSExEhMUBkGRImFxMkKxUqIRAQACAgEDAwUAAAAAAAAAAAABAhEDEiExQbHRMvChQrIE/9oADAMBAAIRAxEAPwDZyWSybMnJbW0hpVoYwNaTUtB9QvBrWMZl69rTls2Ud2yEd1L1JjqaAAD6CgCznHheMp1VIgICAggjsoWXct1Ss0lBU+gAAoPZWz0wjHVOqpEBAQEBAQEGNmMzctuW4nEtbLlpW8nOdrHbRnTqy0/y3dy3164xyt8fVjs2TnjX5eilYZK7w8sVrk7vv8bcu42eYPHSQmhinLfiKu/B23oVpekX61jFo7x7KVvNOlpzE+fd0y5HSICAg8yte6J7Y39ORzSGSU5cSRoaHeimES4TsMicNkPHYZuy8ll5TSXbjXv2V1eyQ6io+JH6fZehzryi89afr9fdxcZ4zTtf1UPEMbkMB49cxeQNdNBkHGGywJAfJJIdDQfry9gPkVp/Reuy8cPHeymik0pPPz+LuPGrHI2OHhtshN1p21IFeXTYT8YuZ1fwGnI7rg33ra2auzVWa1xLUWLUQEBBQzGHtspbtjkc6KeJ3UtbqPSSGQbPYf5GxC117JpLPZri0KuGwVxDcOyWWnbe5Zzem2ZreMcUf9ImH8eW7juSrbNsTHGsYqrr1zE5t1s2Vg2EBAQEBAQEBAQEBAQEBAQEH//Z) no-repeat;
    }

    .char-info-description {
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
        height: 100px;
        box-shadow: 0 1px 1px #000;
        overflow-y: scroll;
    }

    .char-info-description::-webkit-scrollbar {
        width: .1em;
        border-radius: 50%;
    }

    .char-info-description::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    .char-info-description::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0.8);
        outline: 1px solid slategrey;
    }

    .char-item-img {
        height: 100vh;
        /* transform: translateX(50%); */
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(-20px);
        opacity: 0;
    }

    #loading-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgb(0, 0, 0, 0.8);
        z-index: 20;
    }

    #loading-text {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        color: #999;
        width: 100px;
        height: 30px;
        margin: -7px 0 0 -45px;
        text-align: center;
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 20px;
    }

    #loading-content {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        width: 170px;
        height: 170px;
        margin: -85px 0 0 -85px;
        border: 3px solid #F00;
    }

    #loading-content:after {
        content: "";
        position: absolute;
        border: 3px solid #0F0;
        left: 15px;
        right: 15px;
        top: 15px;
        bottom: 15px;
    }

    #loading-content:before {
        content: "";
        position: absolute;
        border: 3px solid #00F;
        left: 5px;
        right: 5px;
        top: 5px;
        bottom: 5px;
    }

    #loading-content {
        border: 3px solid transparent;
        border-top-color: #4D658D;
        border-bottom-color: #4D658D;
        border-radius: 50%;
        -webkit-animation: loader 2s linear infinite;
        -moz-animation: loader 2s linear infinite;
        -o-animation: loader 2s linear infinite;
        animation: loader 2s linear infinite;
    }

    #loading-content:before {
        border: 3px solid transparent;
        border-top-color: #D4CC6A;
        border-bottom-color: #D4CC6A;
        border-radius: 50%;
        -webkit-animation: loader 3s linear infinite;
        -moz-animation: loader 2s linear infinite;
        -o-animation: loader 2s linear infinite;
        animation: loader 3s linear infinite;
    }

    #loading-content:after {
        border: 3px solid transparent;
        border-top-color: #84417C;
        border-bottom-color: #84417C;
        border-radius: 50%;
        -webkit-animation: loader 1.5s linear infinite;
        animation: loader 1.5s linear infinite;
        -moz-animation: loader 2s linear infinite;
        -o-animation: loader 2s linear infinite;
    }

    @-webkit-keyframes loaders {
        0% {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        0% {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    #content-wrapper {
        color: #FFF;
        position: fixed;
        left: 0;
        top: 20px;
        width: 100%;
        height: 100%;
    }

    #header {
        width: 800px;
        margin: 0 auto;
        text-align: center;
        height: 100px;
        background-color: #666;
    }

    #content {
        width: 800px;
        height: 1000px;
        margin: 0 auto;
        text-align: center;
        background-color: #888;
    }

    @media only screen and (max-width: 600px) {
        .wrap-character {
            padding: 0;
            min-height: 100vh;
            padding-bottom: 40px;
        }

        .char-item-img {
            width: 100%;
            height: 100%;
            padding-top: 86%;
        }

        .char-info {
            left: 50%;
            width: 80%;
            top: 90px;
            transform: translateX(-50%);
        }

        .wrap-slide {
            padding: 0 10px;
        }

        .char-slide {
            margin-right: 8px !important;
            width: 60px !important;
        }

        .char-name {
            font-size: 10px;
        }

        .char-info-name {
            font-size: 22px;
        }

        .char-info-birthday {
            max-width: 240px;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .char-info-description {
            font-size: 14px;
        }

        .slide-fade-enter-active {
        transition: all .3s linear;
        }

        .slide-fade-leave-active {
            transition: all .3s translateY(-10px)
        }
        .slide-fade-enter, .slide-fade-leave-to {
            opacity: 0;
        }
    }
</style>