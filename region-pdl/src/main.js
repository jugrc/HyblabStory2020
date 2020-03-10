import App from './App.vue';
import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  render: (h) => h(App)
}).$mount('#app');
