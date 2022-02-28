<template>
  <div class="wrap-intro">
    <div class="intro-img">
        <div class="intro-slogan">
        </div>
    </div>
    <div class="intro-bot">
        <div class="intro-video">
            <div class="new-title">
                   Video Trailer
            </div>
            <div class="intro-slide">
                <Swiper/>
            </div>
        </div>
        <div class="intro-feature">
            <div class="new-title">
                   Tính năng đặc sắc
            </div>
            <div class="feature-img">
                <img class="left" src="../img/intro/adventure.png" alt="">
                <div class="feature-info right">
                    <div class="feature-title">
                        Cuộc phiêu lưu giả tưởng đậm chất sử thi
                    </div>
                    <div class="feature-p">
                        Trải nghiệm cảm giác mạo hiểm cá nhân. Trong vai trò là Nhà Lữ Hành đến từ thế giới khác, bạn bước vào hành trình tìm lại chính mình và người thân mất tích.
                    </div>
                </div>
            </div>

            <div class="feature-img">
                <img class="right" src="../img/intro/map.jpg" alt="">
                <div class="feature-info left">
                    <div class="feature-title">
                        Khám phá thế giới của riêng bạn
                    </div>
                    <div class="feature-p">
                        Bay qua đại lục rộng lớn, vẫy vùng cùng sóng nước, vượt qua núi non trùng điệp. Đặt chân đến những nơi vắng bóng người, khám phá hết thảy những điều kỳ bí đang ẩn giấu trong thế giới tràn đầy kỳ tích này.
                    </div>
                </div>
            </div>

            <div class="feature-img">
                <img class="left" src="../img/intro/coop.jpg" alt="">
                <div class="feature-info right">
                    <div class="feature-title">
                       Khám phá một mình hoặc cùng nhau chiến đấu
                    </div>
                    <div class="feature-p">
                        Bạn có thể chiến đấu một mình, hoặc mời bạn bè tham gia tổ đội 4 người đánh bại những kẻ thù khó nhằn (PS4, iOS, Android, PC)
                    </div>
                </div>
            </div>

            <div class="feature-img">
                <img class="right" src="../img/intro/boss.jpg" alt="">
                <div class="feature-info left">
                    <div class="feature-title">
                        Điều khiển bảy loại nguyên tố
                    </div>
                    <div class="feature-p">
                        Không đơn giản là game chiến đấu thông thường, trong thế giới mở của Genshin Impact, bạn có thể linh hoạt, khéo léo sử dụng sức mạnh nguyên tố đánh bại cường địch và giải mã những câu đố phức tạp.
                    </div>
                </div>
            </div>

            <div class="feature-img">
                <img class="left" src="../img/intro/team.jpg" alt="">
                <div class="feature-info right">
                    <div class="feature-title">
                        Xây dựng đội ngũ của riêng mình
                    </div>
                    <div class="feature-p">
                        Chọn người đồng hành cùng bạn. Với hơn 20 nhân vật (còn tiếp tục cập nhật) cùng những sức mạnh, cá tính và phong cách chiến đấu riêng biệt, hãy chọn thành viên phù hợp với đội hình của bạn.
                    </div>
                </div>
            </div>
        </div>

        <div class="intro-graphic">
            <div class="new-title">
                Đồ họa
            </div>
            <Slide/>
        </div>

        <div class="background-intro"></div>
    </div>
  </div>
</template>

<script>
import Swiper from './IntroSwiper.vue'
import Slide from './IntroSlide.vue'
export default {
    components: {Swiper, Slide},
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .intro-img {
        min-height: 100vh;
        background: url('../img/trailer.jpeg') center / cover  no-repeat;
        position: relative;
    }

    .intro-slogan {
        position: absolute;
        width: 740px;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        height: 200px;
        background: url('https://webstatic-sea.hoyoverse.com/upload/event/2020/11/27/d4913edbfcf8b755e0174efaa6de633b_2834903700633735350.png') center / contain no-repeat;
    }

    .intro-bot {
        padding-top: 40px;
        z-index: 10;
        position: relative;
        z-index: 1;
        background: url('../img/background.png') center / cover no-repeat; 
    }

    .new-title {
        position: relative;
        text-align: center;
        color: #fff;
        font-size: 48px;
        font-weight: bold;
    }

    .new-title::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 385px;
        height: 14px;
        background: url('../img/item/arrow-left.png') no-repeat right center/cover;
    }

    .new-title::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 385px;
        height: 14px;
        background: url('../img/item/arrow-right.png') no-repeat right center/cover;
        transform: scaleX(-1);
    }

    .intro-feature {
        margin-bottom: 80px;
    }

    .feature-img {
        width: 100%;
        padding: 0 200px;
        position: relative;
        margin-top: 180px;
        min-height: 460px;
    }

    .feature-img img {
        display: block;
        width: 900px;
        height: 480px;
        position: absolute;
    }

    .left {
        left: 15%;
    }

    .right {
        right: 15%;
    }

    .feature-info {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
        top: -20%;
        width: 400px;
        height: 360px;
        background: url('../img/intro/intro_background.png') center / cover no-repeat;
    }

    .feature-title {
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        color: #654f42;
    }

    .feature-p {
        margin-top: 30px;
        color: #654f42;
    }

    @media only screen and (max-width: 600px) {
        .intro-img {
            min-height: 52vh;
        }
        
        .intro-slogan {
            width: 100%;
        }

        .new-title {
            font-size: 24px;
        }

        .new-title:after, .new-title::before {
            width: 80px;
        }
        .wrap-swiper {
            padding: 20px 0;
        }

        .img-slide {
            width: 100%;
        }

        .intro-feature {
            margin-bottom: 0;
        }

        .feature-img {
            margin-top: 20px;
            padding: 0 10px;
        }

        .feature-img img {
            position: unset;
            padding:0 8px;
            width: 100%;
            height: 200px;
        }

        .feature-info {
            position: unset;
            width: 100%;
            height: 200px;
            background: url(https://genshin.hoyoverse.com/_nuxt/img/e15f334.png) center/cover no-repeat;
        }

        .feature-title {
            font-size: 14px;
        }

        .feature-p {
            font-size: 12px;
        }
    }
</style>