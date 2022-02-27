const Login = () => import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const New = () => import('../components/New.vue')
const NewDetail = () => import('../components/NewDetail.vue')
const Intro = () => import('../components/Intro.vue')
const User = () => import('../components/User.vue')
const UserProfile = () => import('../components/UserProfile.vue')
const UserPosts = () => import('../components/UserPosts.vue')
const UserPassword = () => import('../components/UserPassword.vue')
const CreatePost = () => import('../components/CreatePost.vue')
const Character = () => import('../components/Character.vue')
const Error = () => import('../components/404.vue')

export const routes = [
  { path: '/', component: Home },
  { path: '/login', name:'login', component: Login },
  { path: '/home', name:'home', component: Home },
  { path: '/news', name:'news',component: New},
  { path: '/game', name: 'intro' ,component: Intro},
  { path: '/characters', name: 'character' ,component: Character},
  { path: '/new-post', name:'create', component: CreatePost},
  {
    path: '/user',
    component: User,
    children: [{name:'profile', path: 'profile',component: UserProfile}, {name:'posts', path: 'posts',component: UserPosts}, {name:'password', path: 'change-password',component: UserPassword}],
  },
  { path: '/detail/:id', name: 'detail', component: NewDetail },
  { path: '/not-found', name: 'errorpage', component: Error},
  { path: '*', redirect: '/not-found'}
]

