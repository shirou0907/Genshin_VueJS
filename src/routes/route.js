import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import New from '../components/New.vue'
import PostDetail from '../components/PostDetail.vue'
import Swiper from '../components/Swiper.vue'
import User from '../components/User.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPosts from '../components/UserPosts.vue'
import UserPassword from '../components/UserPassword.vue'
import CreatePost from '../components/CreatePost.vue'
import Error from '../components/404.vue'

export const routes = [
  { path: '/login', name:'login', component: Login },
  { path: '/home', name:'home', component: Home },
  { path: '/news', name:'news',component: New},
  { path: '/a', component: Swiper},
  { path: '/new-post', name:'create', component: CreatePost},
  {
    path: '/user',
    component: User,
    children: [{name:'profile', path: 'profile',component: UserProfile}, {name:'posts', path: 'posts',component: UserPosts}, {name:'password', path: 'change-password',component: UserPassword}],
  },
  { path: '/detail/:id', name: 'detail', component: PostDetail },
  { path: '/not-found', name: 'errorpage', component: Error},
  { path: '*', redirect: '/not-found'}
]

