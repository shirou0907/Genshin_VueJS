<template>
    <div class="footer">
        <div class="footer-top">
            <div class="footer-icon">
                <a class="icon-link" target="_blank" href="https://www.facebook.com/GenshinImpact.vi/"><i
                        class="fab fa-facebook"></i></a>
            </div>
            <div class="footer-icon">
                <a class="icon-link" target="_blank" href="https://twitter.com/GenshinImpact"><i
                        class="fab fa-twitter"></i></a>
            </div>
            <div class="footer-icon">
                <a class="icon-link" target="_blank" href="https://www.youtube.com/c/GenshinImpact"><i
                        class="fab fa-youtube"></i></a>
            </div>
            <div class="footer-icon">
                <a class="icon-link" target="_blank" href="https://www.instagram.com/genshinimpact/"><i
                        class="fab fa-instagram"></i></a>
            </div>
            <div class="footer-icon">
                <a class="icon-link" target="_blank" href="https://github.com/shirou0907"><i
                        class="fab fa-github"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-logo">
                <img src="../.././img/mihoyo.png" alt="" class="mihoyo-logo">
                <img src="../.././img/genshin.png" alt="" class="genshin-logo">
            </div>
            <div class="footer-contact">
                <div class="">
                    <h4>API</h4>
                    <p>https://api.genshin.dev/</p>
                    <p>https://genshin-nodejs.herokuapp.com/api</p>

                    <h4>Code by Pham Thanh Tung</h4>
                    <p>Github: https://github.com/shirou0907</p>
                    <p>Email: tungpt244@gmail.com</p>
                </div>
                <div class="">
                    <h4>Template</h4>
                    <p>https://genshin.hoyoverse.com/vi/home</p>
                    <p>https://www.hoyolab.com/home</p>

                    <h4>Slide by</h4>
                    <p>https://github.com/surmon-china/vue-awesome-swiper</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer {
        background-color: #000;
    }

    .footer-top {
        display: flex;
        justify-content: space-around;
        margin: 0 30px;
        border-bottom: 1px solid rgb(209, 206, 206);
    }

    .icon-link i {
        font-size: 32px;
        color: #fff;
        padding: 20px;
    }

    .icon-link:hover {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    }

    .footer-bottom {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        min-height: 260px;
        align-items: center;
    }

    .footer-logo {
        display: flex;
        flex: 0 0 50%;
        justify-content: center;
        align-items: center;
    }

    .footer-logo img {
        height: 90px;
        max-width: 180px;
        margin: 0 20px;
    }

    .footer-contact {
        flex: 0 0 50%;
        display: flex;
        justify-content: space-around;
    }

    .footer-contact h4 {
        color: #fff;
        margin-bottom: 10px;
    }

    .footer-contact p {
        color: rgb(182, 179, 179);
        font-size: 14px;
    }
</style>