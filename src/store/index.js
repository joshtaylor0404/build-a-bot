import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robotModule';
import usersModule from './modules/usersModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
