<template>
  <div class="wrap-post">
      <Loading v-show="isLoading"/>

      <div v-show="!isLoading" class="post-slug">
          <router-link to="/home">Home >> </router-link>  
          <router-link to="/news">New >> </router-link> 
          <router-link to="">Detail >></router-link>
          <router-link to=""> {{$route.params.id}}</router-link>
      </div>

      <div v-show="!isLoading" class="detail-post">
        <div class="post">
            <div class="post-info">
                <div class="user-info">
                    <div class="user-img"><img :src="posts.userimg" alt=""></div>
                    <div class="user-name">{{posts.username}}</div>
                </div>
                <div class="date">Cập nhật lúc: {{posts.updatedAt}}</div>
            </div>
            <hr>
            <div class="title">{{posts.title}}</div>
            <div class="photo-wrap">
                <img :src="posts.imgUrl" alt="" class="photo">
            </div>
            <div class="description">{{posts.description}}</div>

            <div class="youtube-video" style="display: flex; justify-content: center; margin-bottom: 40px">
                <iframe width="800" height="480" :src="`https://www.youtube.com/embed/${posts.videoLink}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="wrap-comment">
        <div v-if="$store.state.isLogin" class="send-comment">
            <textarea class="text-comment" name="comment" v-model="send" placeholder="Để lại bình luận của bạn về bài viết này"></textarea> 
            <div @click.prevent = "sendComment()" class="btn-comment" :class="{'btn-comment-active': isInput}">Gửi</div>
        </div>

        <div v-if="isLoadingComment" class="d-flex justify-content-end mt-4">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-if="!$store.state.isLogin" class="send-comment-disabled">
            <div style="font-style:italic">Bạn cần đăng nhập để có thể bình luận về bài viết này</div>
        </div>

        <hr>
        
            <h5>Tất cả bình luận</h5>
            <div class="comment" v-for="(comment, i) in comments" :key="i">
                <!-- {{comment._id}} -->
                <div class="wrap">
                    <div class="comment-info">
                        <img :src="comment.userimg" alt="">
                        <div class="name">{{comment.username}}</div>
                    </div>
                    <div class="date">{{comment.date}}</div>
                </div>
                <div class="detail">{{comment.comment}}</div>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from './Layout/LoadingScreen.vue'
export default {
    components: {Loading},
    data() {
        return {
            posts: {},
            comments: [],
            send: "",
            isLoading: "",
            isLoadingComment: "", 
            isInput: false
        }
    },
    watch: {
        send() {
            if(this.send == "")
                this.isInput = false
            else 
                this.isInput = true
        }
    },
    methods: {
        getData() {
            var vm = this;
            vm.isLoading = true;
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/user/post/` + vm.$route.params.id )
            .then(function (response) {
                vm.posts = response.data
                vm.comments = response.data.comments
                vm.isLoading = false
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        sendComment() {
            if(this.isInput) {
                var vm = this;
                vm.isLoadingComment = true;
                axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/comment`, {
                    userID: JSON.parse(localStorage.getItem('user-info'))._id, 
                    username: JSON.parse(localStorage.getItem('user-info')).name,
                    userimg: JSON.parse(localStorage.getItem('user-info')).photo,   
                    postID: vm.$route.params.id, comment: vm.send}, 
                {   headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                }})
                .then(function () {
                    vm.getData();
                    vm.isLoadingComment = false;
                    vm.send = ""
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
            }
            else {
                alert("Hãy nhập bình luận của bạn!")
            }
            
        }
    }, 
    async activated() {
        await this.getData();
    }
}
</script>

<style scoped>
    .wrap-post {
        background: url('../img/background.png');
        padding-top: 100px;
        padding-bottom: 60px;
    }

    .post-slug {
        padding: 10px 120px;
    }

    .post-slug a {
        color: #ccc;
        text-decoration: none;
    }

    .post-slug a:hover {
        color: #f0f0f0;
    }

    .post-info {
        display: flex;
        justify-content: space-between;
    }

    .user-img img {
        border-radius: 10px;
        width: 40px;
    }

    .user-name {
        font-size: 18px;
    }

    .detail-post {
        margin: auto;
        width: 80%;
        background-color: #f0f0f0;
        border-top: 6px solid rgb(226, 168, 43);
        padding: 60px;
    }
    
    .title {
        font-size: 32px;
        margin-bottom: 40px;
    }

    .description {
        font-style: italic;
        margin: 30px 0;
    }

    .photo-wrap {
        padding: 0 40px;
    }

    .photo {
        display: block;
        width: 800px;
        margin: auto;
    }

    .send-comment {
        margin-top: 20px;
        margin-bottom: 80px;
    }

    .text-comment {
        width: 100%;
        border-radius: 4px;
        padding: 12px 16px;
        outline: none;
    }

    .btn-comment {
        width: 80px;
        text-align: center;
        float: right;
        border-radius: 8px;
        padding: 8px 12px;
        color: #f0f0f0;
        background-color: #ccc;
        cursor: not-allowed;
    }

    .btn-comment-active {
        cursor: pointer;
        background-color: rgb(69, 69, 214);
    }

    .btn-comment-active:hover {
        filter: brightness(1.2);
    }

    .comment {
        margin-top: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 12px 20px;
        background-color: #fff;
        
    }

    .comment-info {
        display: flex;
        align-items: center;
    }

    .comment-info img {
        border-radius: 50%;
        margin-right: 8px;
        width: 32px;
    }

    .wrap {
        display: flex;
        justify-content: space-between;
    }

    .detail {
        margin-top: 20px;
    }


@media only screen and (max-width: 600px) {
    .detail-post {
        width: 100%;
        padding: 40px 20px;
    }

    .post-slug {
        padding: 10px;
        font-size: 14px;
    }

    .photo-wrap {
        padding: 0;
    }

    .photo {
        width: 100%;
    }

    .user-info {
        margin-right: 10px;
    }

    .user-name {
        font-size: 14px;
    }

    .date {
        font-size: 12px;
    }

    .title {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }

    .youtube-video {
        width: 100%;
        height: 238px;
    }

    .youtube-video iframe {
        width: 100%;
        height: 100%;
    }
}

</style>