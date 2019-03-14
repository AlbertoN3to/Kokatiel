import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard from './Dashboard.vue'
import Teste from './Teste.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Teste},
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
