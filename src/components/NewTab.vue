<template>
  <div class="tab">

    <section v-if="isLoading" class="wrapper">
        <div class="card">
            <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    </section>

    <div v-if="isActive==2" class="row wrap-new">
        <div v-show="!isLoading" class="post-wrap col col-12" v-for="(post, i) in posts" :key="i">
            <router-link :to="{ name: 'detail', params: { id: post._id }}" class="post ">
                <div class="photo">
                    <img :src="post.imgUrl" alt="" class="">
                </div>
                <div class="wrap-title">
                    <div class="title">{{post.title}}</div>
                    <div class="title">{{post.createdAt}}</div>
                </div>
            </router-link>
        </div>

        <div class="btn-load" @click="currentpage.v1+=3, isLoading=true, getData()">Tải thêm</div>
    </div>

    <h2 v-if="isActive==1">
         <div v-show="!isLoading" class="post-wrap col col-12" v-for="(postv2, i) in postsv2" :key="i">
            <router-link :to="{ name: 'detail', params: { id: postv2._id }}" class="post ">
                <div class="photo">
                    <img :src="postv2.imgUrl" alt="" class="">
                </div>
                <div class="wrap-title">
                    <div class="title">{{postv2.title}}</div>
                    <div class="title">{{postv2.createdAt}}</div>
                </div>
            </router-link>
        </div>

        <div class="btn-load" @click="currentpage.v2+=3, isLoading=true, getData()">Tải thêm</div>
    </h2>

    <h2 v-if="isActive==3">
        <div v-show="!isLoading" class="post-wrap col col-12" v-for="(post, i) in postsv2" :key="i">
            <router-link :to="{ name: 'detail', params: { id: post._id }}" class="post ">
                <div class="photo">
                    <img :src="post.imgUrl" alt="" class="">
                </div>
                <div class="wrap-title">
                    <div class="title">{{post.title}}</div>
                    <div class="title">{{post.updatedAt}}</div>
                </div>
            </router-link>
        </div>

        <div class="btn-load" @click="currentpage.v2+=3, isLoading=true, getData()">Tải thêm</div>
    </h2>

    <h2 v-if="isActive==4">
        <div class="wrong-post">
            Tạm thời chưa có dữ liệu
        </div>
    </h2>

    
  </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            currentpage: {v1:3, v2:3},
            posts: [],
            postsv2: [],
            isLoading: true,
        }
    },
    props: ['isActive'],
    methods: {
        getData() {
            var vm = this
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/user/post`)
            .then(function (response) {
                // console.log(response);
                response.data.map(e => {
                    e.createdAt = new Date(e.createdAt).toLocaleDateString();
                })
                vm.posts = response.data.slice(0, vm.currentpage.v1)
                vm.postsv2 = response.data.reverse().slice(0, vm.currentpage.v2)
                vm.isLoading = false;
            })
            .catch(function (error) {
                console.log(error);
            });
            }
        },
        mounted() {
            this.getData()
        },
    }

</script>

<style scoped>
    .post {
        padding: 10px 20px;
        cursor: pointer;
        display: flex;
        border: 1px solid #f0f0f0;
        border-radius: 4px;
        box-shadow: 1px 1px 1px #ccc;
        overflow: hidden;
        text-decoration: none;
        margin-bottom: 20px;
        background-color: #fff;
    }

    .post:hover {
        transform: translateX(2px);
        transition: all linear .3s;
    }

    .photo img{
        display: block;
        width: 256px;
        height: 160px;
    }

    .wrap-title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        padding-left: 20px;
    }

    .title:last-child {
        text-align: right;
        font-size: 14px;
    }

    .btn-load {
        width: 100%;
        outline: none;
        font-size: 16px;
        padding: 12px 10px 12px;
        border-radius: 4px;
        text-align: center;
        color: #fff;
        background-color: #393b40;
        cursor: pointer;
        margin-top: 30px;
    }

    .btn-load:hover {
        filter: brightness(1.2);
    }
    
    .wrong-post {
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 50vh;
        justify-content: center;
        border-radius: 4px;
        box-shadow: 0 1px 1px #ccc;
    }


.card {
  display: flex;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 1px 4px 16px rgba(0,0,0,.4);
  width: 100%;
  min-height: 300px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader{
   border-radius: 50%;
  position: relative;
  margin: 50px;
  display: inline-block;
  height: 0px;
  width: 0px;
}

.loader span{
    position: absolute;
    display: block;
    background: #ddd;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    top: -20px;
    perspective: 100000px;
}
.loader span:nth-child(1) {
    left:60px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: 0s;
    background: #ff756f;
}
.loader span:nth-child(2) {
    left:20px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: .2s;
    background: #ffde6f;
}
.loader span:nth-child(3) {
    left:-20px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: .4s;
    background: #01de6f;
}
.loader span:nth-child(4) {
    left: -60px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: .6s;
    background: #6f75ff;
}

@keyframes bounce2 {
    0%, 75%, 100% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(-30px);
    }
}

@media only screen and (max-width: 600px) {
    .post {
        flex-direction: column;
    }

    .photo img {
        width: 100%;
        padding-top: 6px;
    }

    .title {
        padding-left: 0;
    }
}
</style>