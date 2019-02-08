import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue); //bootstrap 추가사용.

new Vue({
  el: '#app',
  render: h => h(App)
})
