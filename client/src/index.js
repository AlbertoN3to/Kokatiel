import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard from './Dashboard.vue'
import Home from './Home.vue'

export const AppBus = new Vue()

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/dashboard', component: Dashboard }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
