import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// firebase
import { messaging } from '@/plugins/firebase';
Vue.prototype.$messaging = messaging;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
