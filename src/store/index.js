import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: [],
  },
  mutations: {
    addNotification(state, payload) {
      state.notifications.push(payload);
    },
  },
  getters: {
    notifications: (state) => state.notifications,
  },
});
