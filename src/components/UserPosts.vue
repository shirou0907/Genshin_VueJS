<template>
    <div class="wrap-user">

        <div v-if="isLoading" class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-if="!isLoading" class="user">
        <div class="user-title">Tất cả bài đăng</div>
        <hr>
        <div v-if="posts.length == 0" class="user-posts">
            <img style="display: block; margin:auto" src="../img/paimon.png" alt="">
            <router-link style="text-align: center;" :to="{name: 'create'}">Bạn chưa có bài đăng nào thì phải, hãy thêm ngay đi </router-link>
        </div>

        <table class="table user-posts" v-if="posts.length > 0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th id="sort" @click="posts.reverse()" scope="col">Ngày đăng <i style="margin-left: 4px" class="fa-solid fa-sort"></i></th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody v-for="(post, i) in posts" :key="i" class="post">
                <tr>
                    <th scope="row">{{i+1}}</th>
                    <td>
                        <div class="post-date fw-bold">{{post.updatedAt}}</div>
                    </td>
                    <td>
                        <div class="post-title">
                            <router-link :to="{name: 'detail' , params: { id: post._id }}">{{post.title}}</router-link>
                        </div>
                    </td>
                    <td>
                        <div class="post-title">
                            <i @click="postChoose = post._id, showModal = true" id="delete" class="fa-solid fa-trash"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="showModal" class="warning-modal">
            <div class="warning">
                <div class="warning-title">Cảnh báo ?</div>
                <div class="warning-description">Bạn có chắc muốn xóa bài đăng này không? Dữ liệu sẽ không thể phục hồi.</div>
                <div class="warning-btn">
                    <div class="btn-warning btn-cancel" @click="showModal = false">Cancel</div>
                    <div class="btn-warning btn-delete" @click="deletePost()">Delete</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                posts: [],
                isLoading: true,
                postChoose: "",
                showModal: false,
                user: JSON.parse(localStorage.getItem("user-info")),
            }
        },
        methods: {
            async getData() {
                var vm = this;
                vm.isLoading = true;
                var res = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/post-by-user`, {
                    userID: vm.user._id
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                res.data.map(e => {
                    e.updatedAt = new Date(e.updatedAt).toLocaleDateString();
                })
                this.posts = res.data.reverse();
                this.showModal = false;
                this.isLoading = false;
                
            },

            async deletePost() {
                var vm = this;
                this.isLoading = true;
                await axios.delete(`${process.env.VUE_APP_BACKEND_URL}/user/post/${vm.postChoose}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }})
                this.getData();
            }
        },
        async created() {
            await this.getData()
        }

    }
</script>

<style scoped>
    a {
        display: block;
        text-decoration: none;
        height: 100%;
        margin-right: 16px;
    }

    th {
        text-align: center;
    }

    td, th {
        padding: 1rem 0.5rem;
    }

    #sort:hover {
        cursor: pointer;
    }

    #delete:hover {
        color: rgb(182, 17, 17);
        cursor: pointer;
    }

    .user-title {
        font-size: 26px;
        padding-top: 10px;
    }

    .post-date {
        padding: 0 16px;
    }

    .warning-modal {
        position: fixed;
        background-color: rgb(0,0,0,0.7);
        width: 100%;
        top: 0;left: 0;
        bottom: 0;
    }

    .warning {
        position: absolute;
        background-color: #fff;
        padding: 20px 40px;
        border-radius: 4px;
        margin-top: 200px;
        margin-left: 50%;
        max-width: 360px;
        transform: translateX(-50%);
    }

    .warning-title {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .warning-description {
        text-align: center;
        font-style: italic;
        margin-bottom: 32px;
    }

    .warning-btn {
        display: flex;
        justify-content: space-between;
    }

    .btn-warning {
        padding: 10px 12px;
        border-radius: 3px;
        min-width: 120px;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }

    .btn-warning:hover {
        filter: brightness(1.05);
    }

    .btn-cancel {
        background-color: #ccc;
    }

    .btn-delete {
        background-color: rgb(211, 21, 21);
    }
</style>