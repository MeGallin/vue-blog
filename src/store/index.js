import Vue from 'vue';
import Vuex from 'vuex';
import Http from './modules/http';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Http,
  },
});
