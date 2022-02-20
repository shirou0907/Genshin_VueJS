<template>
    <div class="wrap-user">
        <div class="wrap-log">
            <div class="user-title">Thay đổi mật khẩu tài khoản</div>
            <div v-if="mess" class="user-log">{{mess}}</div>
            <div v-if="isLoading" class="d-flex justify-content-center mt-4">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <hr>
        <div class="user-password">
            <div class="form-input">
                <label for="title">Password</label>
                <input v-model="oldPassword" type="password" class="post-input" placeholder="Nhập mật khẩu cũ">
            </div>
            <div class="form-input">
                <label for="title">New Password</label>
                <input v-model="newPassword" type="password" class="post-input" placeholder="Nhập mật khẩu mới">
            </div>
            <div class="form-input">
                <label for="title">Comfirm Password</label>
                <input v-model="comfirmPassword" type="password" class="post-input" @blur="checkForm()"
                    placeholder="Xác nhận mật khẩu mới">
                <div v-if="err" style="color: red; font-size: 12px; margin-top: 6px;"> * Mật khẩu nhập lại không chính
                    xác </div>
            </div>
            <div class="btn-submit" @click="changePass()">Change</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                oldPassword: "",
                newPassword: "",
                comfirmPassword: "",
                err: "",
                isLoading: "",
                mess: ""
            }
        },
        methods: {
            checkForm() {
                if (this.newPassword == this.comfirmPassword) {
                    this.err = false;
                } else {
                    this.err = true;
                }
            },
            async changePass() {
                var vm = this
                vm.isLoading = true
                if (!this.err) {
                    try {
                        var data = await axios.put(`${process.env.VUE_APP_BACKEND_URL}/user/change-password`, {
                            id: vm.$store.state.user._id,
                            oldPassword: vm.oldPassword,
                            password: vm.newPassword
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            }
                        });
                        vm.mess = data.data;
                    } catch (error) {
                        vm.mess = error.response.data;
                    }
                    vm.oldPassword = ""
                    vm.newPassword = ""
                    vm.comfirmPassword = ""
                    vm.isLoading = false

                }
            }
        }
    }
</script>

<style scoped>
    .wrap-log {
        display: flex;
        font-size: 26px;
        padding-top: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .user-log {
        color: #e4a12f;
        font-size: 16px;
    }

    .user-password {
       padding: 0 60px;
    }

    .form-input {
        width: 100%;
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-weight: 600;
    }

    .post-input {
        margin-top: 10px;
        width: 100%;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 16px;
        padding: 12px 16px;
    }

    .btn-submit {
        width: 300px;
        background-color: #ccc;
        text-align: center;
        border-radius: 16px;
        padding: 12px 20px;
        color: #fff;
        overflow: hidden;
        transition: all linear .2s;
        cursor: pointer;
    }

    .btn-submit:hover {
        background-color: rgb(69, 69, 214);
    }
</style>