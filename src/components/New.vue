<template>
    <div class="wrap-new">
        <div class="new-slide">
            <div class="row">
                <router-link :to="{ name: 'detail', params: { id: post._id }}" style="text-decoration:none;" class="col col-12 col-md-4"  v-for="(post, i) in posts" :key ="i">
                    <div class="wrap-slide">
                        <div class="slide-img">
                            <img class="img-slide" :src="post.imgUrl" alt="">
                        </div>
                        <div class="slide-title">
                            {{post.title}}
                        </div>
                        <div class="slide-info">
                            <div class="slide-date">{{post.createdAt}}</div>
                            <div class="slide-type">Thông tin</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="new">
            <div class="new-title">
                <h1>Tin Tức</h1>
            </div>

            <div class="category">
                <div v-for="(category, i) in categorys" :key="i" 
                class="category-link"
                :class = "{'category-link--activated': category.selected}"
                @click="isActived = category.id, changeActive(), category.selected = true">
                {{category.name}}
                </div>
            </div>

            <TabNew :isActive="isActived" :key="componentKey"></TabNew>
            
        </div>
    </div>
</template>

<script>
    import TabNew from "./TabNew.vue"
    import axios from "axios"
    export default {
        components: {TabNew},
        data() {
            return {
                posts: [],
                categorys: [
                    {name:'Mới', selected:true, id: 1},
                    {name:'Sự kiện', selected:false, id: 2},
                    {name:'Bản tin', selected:false, id: 3},
                    {name:'Tư vấn', selected:false, id: 4},
                ],
                isLoading: true,
                isActived: 1,
                componentKey: 0
            }
        },
        methods: {
            changeActive() {
                this.categorys.forEach(e=> {
                    e.selected = false
                })
            },

            getData() {
            var vm = this
                axios.get(`${process.env.VUE_APP_BACKEND_URL}/user/post`)
                .then(function (response) {
                    // console.log(response);
                    response.data.map(e => {
                        e.createdAt = new Date(e.createdAt).toDateString();
                    })
                    vm.posts= response.data.reverse();
                    vm.posts = response.data.slice(0, 3)
                    vm.isLoading = false;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }, 
        activated() {
            this.getData();
            this.componentKey += 1;  
        }
    }
</script>

<style scoped>
    .new-slide {
        padding-top: 160px;
        padding-left: 80px;
        padding-right: 80px;
        padding-bottom: 80px;
        background: url('../img/background3.jpg');
    }

    .wrap-slide {
        padding: 20px;
        background-color: #393b40;
        border-radius: 4px;
        color: #fff;
        font-size: 18px;
    }

    .slide-img {
        border-radius: 4px;
        overflow: hidden;
        height: 240px;
    }

    .wrap-slide:hover .img-slide {
        transform: scale(1.2);
    }

    .slide-img img{
        display: block;
        width: 100%;
        height: 100%;
        transform-origin: center 0;
        transition: transform .4s, filter .4s ease-in;
        filter: brightness(1);
    }

    .slide-title {
        margin-top: 16px;
        margin-bottom: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 24px;
        min-height: 48px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .slide-info {
        display: flex;
        justify-content: space-between;
        color: rgb(185, 185, 11);
    }

    .new {
        min-height: 100vh;
        padding: 0 100px;
        padding-top: 40px;
        padding-bottom: 100px;
        background: url('../img/background2.jpg');
    }

    .new-title {
        position: relative;
        text-align: center;
        color: #fff;
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

    .category {
        display: flex;
        padding: 40px 0;
    }

    .category-link {
        cursor: pointer;
        width: 160px;
        padding: 10px 20px;
        text-align: center;
        background-color: #fff;
        border-radius: 6px;
        margin-right: 30px;
    }

    .category-link:hover {
        background-color: #393b40;
        color: #f4d8a8;
    }

    .category-link--activated {
        background-color: #393b40;
        color: #f4d8a8;
    }

   
</style>