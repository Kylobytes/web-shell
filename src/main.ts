import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'normalize.css'
import 'fork-awesome/scss/fork-awesome.scss'

Vue.config.productionTip = false

new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app')
