<template>
  <div v-if="isOpen" class="wrap-login">
    <div class="login">

      <div v-if="isLoading" class="loading-login">
        <img style="width: 100%" src="../img/loading3.gif" alt="">
      </div>

      <div class="login-exit" @click="$emit('close-login')"><i class="fa-solid fa-x"></i></div>
      <div class="login-title"> ĐĂNG NHẬP </div>
      <div class="login-input">
        <label for="email">Email</label>
        <input v-model="email" @blur="checkEmail" type="mail" name="email" id="email" placeholder="Nhập mail của bạn">
        <span style="font-size: 12px; color: red">{{validate.email}}</span>
        
        <label for="password">Password</label>
        <input v-model="password" @blur="checkPassword" type="password" name="password" id="password" placeholder="Mật khẩu">
        <span style="font-size: 12px; color: red">{{validate.password}}</span>

        <button class="btn-submit" @click.prevent="Login">Login</button>
      </div>
      <div class="login-option">
        <div class="option-link">Cần trợ giúp</div>
        <div class="option-link" @click="isRegister = true">Đăng ký ngay</div>
      </div>
      <div style="text-align:center;">Hoặc đăng nhập bằng các tài khoản sau</div>
      <div class="login-oauth">
        <div class="oauth-link"><img
            src="data:image/png;base64,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"
            alt=""></div>
        <div class="oauth-link"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAH5ElEQVR4Xu2daWxUVRTHfywBCmoJGBYRcYksiqjhA4lFESg1JBYlQoAPQEBIMJGKoEDYAoEQVglqgh+g/dCEVXApmyJYMGxfQCkSiIEKISKhFFH2xZr/60ydlunMm3n33Zk27ySTaTr3nnPuf+5992z3TgNSS48CLwNdIl5tgYcjXtLwn4jXReBUxOsoUJaqYTSwLDgDyAb6Av2AF4CGHnX4FygB9gA/Aj8ANz3ydN3dBoCS8RowEhgCZLrWLrmGV4EvgUJgH1CRHBt3vfwEsCkwBvgIeMadOsZbnQaWAQXAbePcAT8A1DKdEALuMT+UToLnHyEgvzC9vE0D+CbwKfBUEoO00aUUyAO2mhJmCsAnQsC9ZUoxn/l8EwLynFc5JgAcDOQDLb0qY7n/X8BY4Csvcr0A2ARYCkz06VnqZVxu+2qH/gz4GLjjtlNku2QBbAUUAa8kIzQN+xwAcoHyRHVLBsDHge+A5xIVlubtTwBvAOcT0TNRAOVyfQ9o06iPpE0lJ+QmuhpfIgBq5u2vx+CFAROIWW5nolsA9cz7qR4u29pmmZbzq26eiW4A1G4rJ72+bBiuliagjUVBj5i7sxsAV4aMTreC61M7eVUfxBpQPABlJG+uw3ae1y9TduI7sYztWABqp/2lDnoYXkGr2V8ey4tAVLcvFoDyFweZ1qaO8vsWiOrn1wagoiryNAL6HwF5Kg9EcaIBqHjer2kcknKGlJmZydWrCj5bI4XCnq8ZT4wG4IfAJ9bUSkBQu3btmD59OiNHjmTfvn0MHqw9zipNBlZESqwJoMLwZ4B0iSRX6Tpw4EAKCwtp3bq18781a9Ywbtw4q+gBimw/HZkeqAmgQvGrbGsVT15OTg5FRUU0aSKbvpLGjx/P6tWr43X14/P3AKUGHIoEUH//lsIEUNTBtmzZklOnTtGmTZuqz69fv06nTp24fPmyHwDF46lE1bPhbF8kgH2A4ni9bX8+Z84c5s2bV03sggULmD17tm1VIuW9DuytOQO1Ht5NpVbRZJ88eZIuXRRFqyRtHgMGDODOnaQCyKaGtwZwHsDhGSjT5U/gEVMSTPBp1qwZN27coEGDSjXXr1/vPPuuXbtmgr0XHrKf2sukCQMoI1HWdlqRnn87d+5Es7CgoIC9e51Vky4kL60oDKDsPtl/VkkzTOZJv3796NChAzdv3uTgwYNs2rSJixdVQ/Q/NW7cmP79+zNo0CC6d+9ORkYGFy5c4NChQ6xdu5azZ89a1T1kD04OA/hzyGG2psSIESNYunSpA1xNunfvHtu3b3eWbFlZGdnZ2YwaNQoZ0tFI7VetWsXUqVO5deuWrTEo0PKSAFSJmb5ur1VSrhVfvHixM1jTtH//fmQz6rlpgVQV1lYADggliizIhEmTJrFiRTVvyKhcmTxz5841yjMGsxwB+H4ouey70M6dO1NSUlLNozApdN26dYwePZq7d++aZBuL10QBqMy8QPSd5L+OHatqCvNUXFzs2Id6HlqkzwWg8rxaxr6Sds3y8nK085omzbiuXbty5oziIFZplwA8Fiq19VWydtJdu3b5ImPDhg0MHz7cF95xmJYIQAUKn/Rb+rRp01i0aJEvYmTiKNSVAvpdAF4KmTK+yl+2bBlTpkzxRUZWVhYHDiiNa53KBKAsTwVSfaX8/HzGjFHJtHnq2bMnR44cMc84Psfb1gCUpzBhguK15ik3N5etW41V7SaioAOglSU8f/58Zs2alYhyrtsuXLiQmTNnum5vsKGzhLX3+14UruWrZewHlZaWOjFDiwZ0eBil1syYbt26ceKEip78Ie3yS5Ys8Yd57VyPWTOkpYNCVJG5DZOj1exTmnPbtm0m2cbj5RjS1ly5jRs3MnTo0HhKJf25QJwxY4YTrLh//37SfBLo6Lhy1oIJmiFbtmxJQL/kmirhpMSTBXKCCdbCWYoqnzt3jvbtlU7whyoqKujRowfHjx/3R0B1rk44y2pA1U9zRmPbvXu3E8G2QFUBVcmyFtJv1aqVEzVRcZAf1LdvXxTaskBVIX3JsppUysvLY+VKVQ6bpc2bNzNkiI4kWyGF1auSSlbTmg0bNmTPnj306aNiCDN05coV59l3/nxC52S8CK+W1lRi/YKF0+RVCnfs2JGjR49WVVt5GYk2jmHDhjnpUEv0QGJdcq2XdvTu3dsJssaKUitEr907Fql+RpuTRXqgtEOyU1JcpDyGgqFt2+qyDtBsUgWCKhF27NjBpUuXaN68OQJb/rRsyaZNK6NvSsTL5lu+fLlF7BxRUYuLUlbe1qJFC8f00Pvhw4c5fVoVZNFJBZa9evWiUaNGThA1BSVutZa3SeO0LLC0Pb3iyKu1wFL90rbEN01AjFviKz3Ttsg8DUCMW2QuHevEMYcUgOn6mIN0Cw7aPPgNuT5oE+76dW3Hm1Lw7adapI69vR1NidqOeqltcNiwErGkDxuqc3Dc1cNx1/CMDQ5cx3iAxFrC4W7BkX+PAKp7cOlELSC6mYHhrsG1J1FATARAdQ8u3qkBYqIAqntw9VMEiMkAGH4mBpePebzOJLj+ziOA4YkcXMBowNGU26cam7pyTYoOVuriyLS4AjQS/+ASWgOzMbgG2QCIYhFcxG0ISJlK4avgVRzo96n4vwFl2Ov8VfDR8A9+jMDQrAyzifZzGDpVrZ/DeCj0rrb6OQxdlKB33e2QNj+H8R/NbyK5cMfY9QAAAABJRU5ErkJggg=="
            alt=""></div>
        <div class="oauth-link"><img
            src="data:image/png;base64,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"
            alt=""></div>
        <div class="oauth-link"><img
            src="data:image/png;base64,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"
            alt=""></div>
      </div>
    </div>

    <div v-if="isRegister" class="login">
      <div v-if="isLoading" class="loading-login">
        <img width=370 src="../img/loading3.gif" alt="">
      </div>

      <div class="login-exit" @click="$emit('close-login'), isRegister = false"><i class="fa-solid fa-x"></i></div>
      <div class="login-title"> ĐĂNG KÝ </div>
      <div class="login-input">
        <label for="email">Email</label>
        <input v-model="email" @blur="checkEmail" type="mail" name="email" id="email" placeholder="Nhập mail của bạn">
        <span style="font-size: 12px; color: red">{{validate.email}}</span>

        <label for="name">Name</label>
        <input v-model="name" @blur="checkName" type="text" name="name" id="name" placeholder="Tên hiển thị của bạn">
        <span style="font-size: 12px; color: red">{{validate.name}}</span>

        <label for="password">Password</label>
        <input v-model="password" @blur="checkPassword" type="password" name="password" id="password" placeholder="Mật khẩu">
        <span style="font-size: 12px; color: red">{{validate.password}}</span>

        <label for="passwordConfirm">Confirm Password</label>
        <input v-model="passwordConfirm" @blur="checkConfirm" type="password" id="passwordConfirm" placeholder="Xác nhận mật khẩu">
        <span style="font-size: 12px; color: red">{{validate.passwordConfirm}}</span>

        <button class="btn-submit" @click.prevent="Register">Register</button>
      </div>
    </div>

    <div v-show="error.isErr" class="toast-login-err">
      <div class="toast-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <div class="toast-info">
        <div class="toast-title">Cảnh báo</div>
        <div class="toast-message">{{error.mess}}</div>
      </div>
    </div>

    <div v-show="success.isSucc" class="toast-login-succ">
      <div class="toast-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <div class="toast-info">
        <div class="toast-title">Thông báo</div>
        <div class="toast-message">{{success.mess}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        email: "",
        name: "",
        password: "",
        passwordConfirm: "",
        isRegister: false,
        error: {
          isErr: false,
          mess: ""
        },
        success: {
          isSucc: false,
          mess: ""
        },
        isLoading: "",
        validate: {email: "", password: "", passwordConfirm: "", name: ""}
      }
    },
    props: ['isOpen'],
    methods: {
      ...mapMutations(['auth', 'setUser']), // <=> $store.dispatch('auth')

      async Login() {
        var vm = this;
        if (this.email == '' || this.password == '' || this.validate.email != '' || this.validate.password != '') {
          alert('Bạn phải nhập email và mật khẩu!')
        } else {
          this.isLoading = true;
          try {
            var datatoken = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/api/login`, {
              email: this.email,
              password: this.password
            })
            localStorage.setItem("token", datatoken.data.token);

            try {
              var dataUser = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              })

              localStorage.setItem('user-info', JSON.stringify(dataUser.data));
              localStorage.setItem('login', true);
              vm.auth();
              vm.setUser();
              vm.isLoading = false;
              vm.$emit('close-login')
              vm.email = ""
              vm.password = ""

            } catch (error) {
              if (error.response) {
                console.log(error.response.data);
              }
            }
          } catch (error) {
            if (error.response) {
              vm.error.isErr = true
              vm.error.mess = error.response.data
              setTimeout(() => {
                vm.error.isErr = false
                vm.isLoading = false;
              }, 1000)
              
            }
          }
        }
      },

      async Register() {
        var vm = this;
        if (this.email == ''  || this.password == '' || this.passwordConfirm == '' || this.name == '' || this.validate.email != '' || this.validate.name != '' || this.validate.passwordConfirm != ''   || this.validate.password != '') {
          alert('Bạn chưa điền đầy đủ thông tin')
        } else {
          this.isLoading = true;
          try {
              var result = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/api/register`, {
                email: vm.email,
                password: vm.password,
                name: vm.name
              ,
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              })
              console.log(result)
              vm.success.isSucc = true
              vm.success.mess = result.data
              setTimeout(() => {
                vm.success.isSucc = false
                vm.isLoading = false
                vm.$emit('close-login')

              }, 1000)
              
          } catch (error) {
            if (error.response) {
              vm.error.isErr = true
              vm.error.mess = error.response.data
              setTimeout(() => {
                vm.error.isErr = false
                vm.isLoading = false;
              }, 1000)
             
            }
          }
        }
      },

      checkEmail() {
        if (!this.email || this.email == '') {
          this.validate.email = '* Không được để trống!';
        } else if (!this.validEmail(this.email)) {
          this.validate.email = '* Sai định dạng email';
        } else {
          this.validate.email = ''
        }
      },

      checkPassword() {
        if(this.password == '') {
          this.validate.password = '* Không được để trống!';
        } else {
          this.validate.password = '';
        }
      },

      checkConfirm() {
        if(this.passwordConfirm == '') {
          this.validate.passwordConfirm = '* Không được để trống!';
        }
        else if(this.passwordConfirm != this.password) {
          this.validate.passwordConfirm = '* Mật khẩu không khớp'
        } else {
          this.validate.passwordConfirm = '';
        }
      },

      checkName() {
        if(this.name == '') {
          this.validate.name = '* Không được để trống!';
        } else {
          this.validate.name = '';
        }
      },

      validEmail(email) {
        var re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap-login {
    background-color: rgb(0, 0, 0, 0.2);
  }

  @keyframes example {
    from {
      right: -100px;
    }

    to {
      right: 20px;
    }
  }

  .toast-login-err {
    position: fixed;
    top: 100px;
    right: 20px;
    display: flex;
    align-items: center;
    background-color: rgb(223, 28, 28);
    width: 300px;
    padding: 10px 20px;
    color: #fff;
    border-radius: 4px;
    margin: auto;
    box-shadow: 0 0 1px #fff;
    animation: example linear .2s;
    z-index: 999;
  }

  .toast-login-succ {
    position: fixed;
    top: 100px;
    right: 20px;
    display: flex;
    align-items: center;
    background-color: rgb(65, 201, 11);
    width: 300px;
    padding: 10px 20px;
    color: #fff;
    border-radius: 4px;
    margin: auto;
    box-shadow: 0 0 1px #fff;
    animation: example linear .2s;
    z-index: 999;
  }

  .toast-icon {
    font-size: 26px;
    margin-right: 12px;
  }

  .loading-login {
    position: absolute;
    top: 25%;
  }

  .login {
    position: fixed;
    right: 0;
    top: 80px;
    left: 0;
    background-color: #fff;
    width: 450px;
    padding: 30px 40px;
    border-radius: 4px;
    margin: auto;
    box-shadow: 0 20px 100px #000;
    z-index: 99;
  }

  .login-exit {
    position: absolute;
    padding: 10px;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: #ccc;
  }

  .login-title {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .login-input {
    display: flex;
    flex-direction: column;
  }

  .login-input input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 12px;
    margin-top: 8px;
    margin-bottom: 2px;
  }

  .login-input label {
    margin-top: 10px;
  }

  .btn-submit {
    outline: none;
    color: #fff;
    border: none;
    background-color: #333;
    border-radius: 4px;
    padding: 10px 12px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .login-option {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .login-oauth {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .oauth-link img {
    width: 46px;
  }

   @media only screen and (max-width: 600px) {
      .login {
        width: 80%;
        padding: 10px 30px;
      }

      .login-oauth {
        padding: 20px 0;
      }
    }
</style>