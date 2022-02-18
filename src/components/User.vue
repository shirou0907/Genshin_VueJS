<template>
  <div v-if="$store.state.isLogin" class="wrap-user">
      <div class="row user">
            <div class="col col-md-4">
                <div class="user-setting">
                    <div class="user-title">Quản lý tài khoản</div>
                    <hr>
                    <router-link :to="{name: 'profile'}" active-class="active" class="user-link">Quản lý thông tin</router-link>
                    <router-link :to="{name: 'posts'}" active-class="active" class="user-link">Bài đăng</router-link>
                    <router-link :to="{name: 'password'}" active-class="active" class="user-link">Thay đổi mật khẩu</router-link>
                </div>
            </div>
            <div class="col col-md-8">
                <router-view class="user-setting"></router-view>
            </div>
      </div>
     
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user-info")),
            isChoose: "",
        }
    }
}
</script>

<style scoped>
    .user {
        --bs-gutter-x: 3.0rem;
    }

    .wrap-user  {
        padding-top: 120px;
        padding-bottom: 80px;
        background-color: #f0f0f0;
        padding-left: 80px;
        padding-right: 80px;
        min-height: 100vh;
    }

    .user-title {
        font-size: 26px;
        padding-top: 10px;
    }

    .user-setting {
        padding: 10px 30px;
        background-color: #fff;
        border-radius: 4px;
    }

    .user-link {
        display: block;
        text-decoration: none;
        padding: 12px 0;
        font-size: 18px;
        color: #333;
    }

    .user-link:hover {
        color: #e4a12f;
    }

    .active {
        color: #e4a12f;
        font-weight: 600;
    }


</style>>
