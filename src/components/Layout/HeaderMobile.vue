<template>
    <div class="wrap-header">
        <div class="header">
            <div class="header-link">
                <div class="header-logo">
                    <router-link to='/home'>
                        <img src="../.././img/logo-header.png" alt="">
                    </router-link>
                </div>
            </div>
            <div class="header-tab" @click="openTab = true">
                <i class="fa-solid fa-bars"></i>
            </div>
            <transition name="slide-fade" mode="out-in">
                <div v-if="openTab" class="header-list-modal" @click="openTab = false">
                    <div class="header-list">
                    <div class="header-link-close">
                        <i class="fa-solid fa-x"  @click="openTab = false"></i>
                    </div>

                    <router-link to="/user/profile" v-if="$store.state.isLogin" class="header-link-item">
                        <div  class="user-auth">
                            <div class="user-logo">
                                <img :src="$store.state.user.photo" alt="">
                            </div>
                            <div class="user-name">
                                <span>{{$store.state.user.name}}</span>
                            </div>
                            <div class="user-name" @click="logout()">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                        </div>
                    </router-link>

                    <div v-if="!$store.state.isLogin">
                            <div @click="openLogin = true" class="header-link-item"
                                style="display: flex;align-items: center; cursor: pointer;">Đăng nhập <i
                                    style="font-size: 30px; margin-left: 10px" class="fa fa-circle-user"></i></div>
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
                </div>
            </transition>
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
                openTab: false,
                openMusic: false,
            }
        },
        methods: {
            logout() {
                this.$store.state.isLogin = false;
                this.$store.state.user = "";
                localStorage.clear();
                this.$router.push('/home')
            },
        },
    }
</script>

<style scoped>
    .active {
        font-weight: bold;
        border-left: 4px solid #69e0ff;
    }

    .header {
        display: flex;
        justify-content: space-between;
        height: 70px;
        background: url('../.././img/header-background.png');
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        align-items: center;
        box-shadow: 0 1px 6px #000;
        z-index: 10000;
    }

    .header-logo img {
        cursor: pointer;
    }

    .header-link {
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 16px;
    }

    .header-link-item {
        color: #000;
        text-decoration: none;
        display: block;
        padding: 10px 20px;
        transition: transform linear .3s;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .user-auth {
        display: flex;
        align-items: center;
    }

    .user-logo img {
        max-width: 32px;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px #ccc;
    }

    .user-name {
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

    .header-list-modal {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .header-list {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        min-width: 240px;
        background-color: #fff;
        box-shadow: 0 1px 8px #fff;
    }


    .header-tab i{
        font-size: 26px;
        color: #fff;
        padding-right: 20px;
    }

    .header-link-close {
        padding: 10px 0;        
        text-align: right;
        background-color: #000;
    }

    .header-link-close i {
        padding: 10px;
        color: #fff;
        font-size: 26px;
    }

     .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>