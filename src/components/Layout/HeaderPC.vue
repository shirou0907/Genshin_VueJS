<template>
    <div class="wrap-header">
        <div class="header">
            <div class="wrap-audio">
                <audio ref="audioPlay" muted="muted" loop="loop" autoplay="true" src="../.././audio/music.mp3"
                    type="audio/mpeg" class="audio" controls></audio>
                <audio ref="audioPlay2" muted="muted" loop="loop" autoplay="true" src="../.././audio/music2.mp3"
                    type="audio/mpeg" class="audio" controls></audio>
            </div>

            <div class="header-link">
                <div class="header-logo">
                    <img v-if="openMusic" @click="openMusic=false" width=32 src="../.././img/item/musicon.png" alt="">
                    <img v-if="!openMusic" @click="openMusic=true, playMusic()" width=32
                        src="../.././img/item/musicoff.png" alt="">
                    <router-link to='/home'>
                        <img src="../.././img/logo-header.png" alt="">
                    </router-link>
                </div>
                <router-link to='/home' active-class="active" class="header-link-item">
                    Trang Chủ
                </router-link>
                <router-link to='/news' active-class="active" class="header-link-item">
                    Tin tức
                </router-link>
                <router-link to='/characters' active-class="active" class="header-link-item">
                    Nhân vật
                </router-link>
                <router-link to='/game' active-class="active" class="header-link-item">
                    Giới thiệu game
                </router-link>
                <router-link :to="{name: 'create'}" active-class="active" class="header-link-item"
                    v-if="$store.state.isLogin">
                    Đăng bài
                </router-link>
            </div>

            <div class="user-info">
                <div v-if="$store.state.isLogin" class="user-auth">
                    <div class="user-logo">
                        <img :src="$store.state.user.photo" alt="">
                    </div>
                    <div class="user-name">
                        <span>{{$store.state.user.name}}</span>
                        <i class="fas fa-angle-down"></i>
                    </div>
                </div>

                <div v-if="!$store.state.isLogin">
                    <div @click="openLogin = true" class="header-link-item"
                        style="display: flex;align-items: center; cursor: pointer;">Đăng nhập <i
                            style="font-size: 30px; margin-left: 10px" class="fa fa-circle-user"></i></div>
                </div>

                <div v-if="$store.state.isLogin" class="user-dialog">
                    <router-link to="/user/profile" class="user-dialog-link">
                        Thẻ thông tin
                    </router-link>
                    <div @click="logout()" class="user-dialog-link">
                        Đăng xuất
                    </div>
                </div>
            </div>

        </div>
        <Login :isOpen="openLogin" @close-login="openLogin=false" />
    </div>
</template>

<script>
    import Login from "../Login.vue"
    export default {
        components: {
            Login
        },
        data() {
            return {
                user: JSON.parse(localStorage.getItem("user-info")),
                openLogin: "",
                openMusic: false,
            }
        },
        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 1024;
            },
            logout() {
                this.$store.state.isLogin = false;
                this.$store.state.user = "";
                localStorage.clear();
                this.$router.push('/home')
            },
            playMusic() {
                this.$refs.audioPlay.play();
                this.$refs.audioPlay2.play();
            }
        },
        mounted() {
            this.$refs.audioPlay.muted = true;
            this.$refs.audioPlay2.muted = true;
        },
        updated() {
            this.$refs.audioPlay.muted = !this.openMusic;
            this.$refs.audioPlay2.muted = !this.openMusic;
        }, 
    }
</script>

<style scoped>
    .active {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
        transform: scale(1.02);
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        height: 70px;
        background: url('../.././img/header-background.png');
        position: fixed;
        width: 100%;
        min-width: 1280px;
        left: 0;
        top: 0;
        opacity: .9;
        box-shadow: 0 1px 6px #000;
        z-index: 10000;
    }

    .wrap-audio {
        position: absolute;
        top: -200px;
    }

    .header-logo img {
        cursor: pointer;
    }

    .header-link {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-left: 30px;
        font-size: 16px;
    }

    .header-link-item {
        color: #fff;
        text-decoration: none;
        padding: 0 20px;
        transition: transform linear .3s;
    }

    .header-link-item:hover {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    }

    .user-info {
        display: flex;
        position: relative;
        align-items: center;
        padding: 0 20px;
    }

    .user-info:hover .user-dialog {
        display: inline-flex;
    }

    .user-auth {
        display: flex;
        align-items: center;
    }

    .user-logo img {
        max-width: 32px;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px #fff;
    }

    .user-name {
        color: #fff;
        margin-left: 10px;
    }

    .user-name i {
        margin-left: 10px;
    }

    .user-dialog {
        right: 20px;
        top: calc(100% + 10px);
        width: 260px;
        display: flex;
        border-radius: 6px;
        padding: 10px;
        position: absolute;
        justify-content: space-around;
        background-color: #000;
        display: none;
    }

    .user-dialog::before {
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        top: -8px;
        right: 8px;
        border-top: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid #000;
    }

    .user-dialog::after {
        content: "";
        position: absolute;
        left: 0;
        top: -20px;
        width: 100%;
        height: 20px;
        background-color: transparent;
    }

    .user-dialog-link {
        color: #fff;
        text-decoration: none;
        padding: 10px;
    }

    .user-dialog-link:hover {
        cursor: pointer;
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    }
</style>