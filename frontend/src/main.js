import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
