import Vue from 'vue';
import Vuex from 'vuex';
import Http from './modules/http';
import Common from './modules/Common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Http,
    Common,
  },
});
