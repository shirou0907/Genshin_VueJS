<template>
    <div class="wrap">
        <div class="title">Đăng bài</div>
        <hr>
        <div class="post-body">
            <div class="form-input">
                <label for="title">Tiêu đề</label>
                <input v-model="title" type="text" class="post-input" placeholder="Nhập vào tiêu đề(bắt buộc)">
            </div>
            <div class="form-input">
                <label for="description">Nội dung</label>
                <textarea v-model="description"  type="text" class="post-input"></textarea>
            </div>
            <div class="form-input">
                <label for="img">Đường dẫn ảnh</label>
                <input v-model="img" type="text" class="post-input" placeholder="Nhập đường dẫn ảnh cho bài đăng">
                <div class="view" v-if="img">
                    <img style="width:100%; height:100%" :src="img" alt="">
                </div>
            </div>
            <div class="form-input">
                <label for="video">Đường dẫn youtube</label>
                <input v-model="video" type="text" class="post-input" placeholder="Nhập đường dẫn youtube">
                <div class="view" v-if="video">
                    <iframe width="540" height="360" :src="videoLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="btn-submit" :class="{'btn-submit-active': check}" @click="createPost()">Đăng</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                title: "",
                description: "",
                img: "",
                video: "",
                check: false,
                user: this.$store.state.user,
            }
        },
        computed: {
            videoLink() {
                return `https://www.youtube-nocookie.com/embed/${this.video.split('/')[3].substring(8,19)}`
            } 
        },
        updated() {
            if(this.title != '' && this.description != '' && this.video != '' && this.img != '') {
                this.check = true;
            } else {
                this.check = false;
            }
        }, 
        methods: {
            async createPost() {
            var vm = this
                if(this.check) {
                    var title = this.title;
                    var description = this.description;
                    var img = this.img;
                    var video = this.video.split('/')[3].substring(8,19);
                    console.log(title, description, img, video)
                    await axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/post/${vm.$store.state.user._id}`, 
                        { title: title, description: description, img: img, video: video},
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }});
                    this.title = "",
                    this.description = "",
                    this.img = "",
                    this.video=""
                    // this.$router.push('/user/posts')
                }
            }
        }
    }
</script>

<style scoped>
    .wrap {
        padding-top: 120px;
        padding-left: 80px;
        padding-right: 80px;
        padding-bottom: 80px;
        min-height: 100vh;
    }

    .title {
        font-size: 26px;
        padding-top: 10px;
    }

    .form-input {
        width: 100%;
        margin-bottom: 20px;
    }

    label {
        display: block;
    }

    .post-input {
        margin-top: 10px;
        width: 100%;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 12px 20px;
    }

    .btn-submit {
        width: 300px;
        background-color: #ccc;
        text-align: center;
        border-radius: 4px;
        padding: 12px 20px;
        color: #fff;
        overflow: hidden;
        transition: all linear .5s;
        cursor: not-allowed;
    }

    .btn-submit-active {
        cursor: pointer;
        background-color: rgb(69, 69, 214);
    }

    .view {
        width: 540px;
        height: 360px;
        border-radius: 8px;
        margin-top: 10px;
        overflow: hidden;
        box-shadow: 0 1px 1px #ccc;
    }
</style>