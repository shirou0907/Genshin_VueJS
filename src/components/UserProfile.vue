<template>
  <div class="user-profile">
    <div v-if="isLoading" class="d-flex justify-content-center mt-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="wrap-user">
      <div class="user-title">
        Thông tin tài khoản
      </div>
      <div v-if="!isEdit" class="user-btn" @click="isEdit=true">Đổi</div>
      <hr>
      <div class="user-info row">
        <div class="col col-md-4">
          <div class="user-p disabled">ID: </div>
          <div class="user-p disabled">Email: </div>
          <div class="user-p">Tên người dùng: </div>
          <div class="user-p">Ảnh đại diện: </div>
        </div>
        <div class="col col-md-8">
          <div class="user-p disabled">{{user._id}}</div>
          <div class="user-p disabled">{{user.email}}</div>
          <div v-if="!isEdit" class="user-p user-p-active">{{user.name}}</div>
          <input v-if="isEdit" class="post-input" type="text" :placeholder="user.name" v-model="name">
          <div v-if="!isEdit" class="user-p user-p-active"><img width=200 height=200 :src="user.photo" ></div>
          <input v-if="isEdit" class="post-input" type="text" :placeholder="user.photo" v-model="photo">
        </div>
      </div>
      <div v-if="isEdit" class="user-btn" @click="changeInfo()">Save</div>
      <div v-if="isEdit" class="user-btn" @click="isEdit = false">Back</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem("user-info")),
        name: JSON.parse(localStorage.getItem("user-info")).name,
        photo: JSON.parse(localStorage.getItem("user-info")).photo,
        isEdit: false,
        isLoading: ""
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      async changeInfo() {
        var vm = this
        vm.isLoading = true
        await axios.put(`${process.env.VUE_APP_BACKEND_URL}/user/info`, {
          id: vm.$store.state.user._id,
          name: vm.name,
          photo: vm.photo
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        try {
          var dataUser = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })

          localStorage.setItem('user-info', JSON.stringify(dataUser.data));
          vm.setUser();
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
          }
        }

        vm.isLoading = false;
        vm.isEdit = false;
      }
    }
  }
</script>

<style scoped>
  .user-title {
    font-size: 26px;
    padding-top: 10px;
  }

  .user-p {
    padding: 16px;
    font-size: 18px;
  }

  .disabled {
    color: rgb(134, 134, 134);
  }

  .user-p-active {
    display: flex;
    justify-content: space-between;
  }

  .user-btn {
    width: 100px;
    padding: 4px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 12px;
  }

  .user-btn:hover {
    background-color: #393b40;
    color: #f4d8a8;
  }

  .post-input {
    margin-top: 10px;
    width: 60%;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 12px 16px;
  }
</style>