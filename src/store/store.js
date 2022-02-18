import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const login = localStorage.getItem('login') 
// console.log(login);

export const store = new Vuex.Store({
    state: {
      isLogin: login,
      user: JSON.parse(localStorage.getItem("user-info"))
    },
    mutations: {
        auth(state) {
            state.isLogin = true;
        },
        setUser(state) {
          state.user = JSON.parse(localStorage.getItem("user-info"))
        }
    },
    actions: {
        
    }
  })