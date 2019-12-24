import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import drunkard from '../drunkard-ui'
import vueToast from '../drunkard-ui/toast'
import drunkardInput from '../drunkard-ui/input'
import "../drunkard-ui/style/index.scss";

Vue.config.productionTip = false
// Vue.use(drunkard)
Vue.use(vueToast)
Vue.use(drunkardInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
