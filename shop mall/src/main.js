import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/css/reset.css'
import 'animate.css'

Vue.config.productionTip = false

//把路由对象注入到new Vue实例中
new Vue({
  router,//导入路由对象
  store,
  render: h => h(App),
}).$mount('#app')