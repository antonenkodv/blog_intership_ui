import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/Posts.vue'
import Home from '../components/Home.vue'
Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        }
    ]
})

export default router;