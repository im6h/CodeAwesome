import Vue from 'vue';
import Vuex from 'vuex';
import apiConfig from '@/configs/apiConfig';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotNews: [],
    sportNews: [],
  },
  getters: {
    hotNews: state => state.hotNews,
    sportNews: state => state.sportNews,
  },
  mutations: {
    setHotNews: (state, payload) => {
      state.hotNews = payload;
    },
    setSportNews: (state, payload) => {
      state.sportNews = payload;
    },
  },
  actions: {
    async getHotNews({ commit }): Promise<void> {
      try {
        const response = await apiConfig.getHotNews();
        if (response.status === 200 && response.data) {
          commit('setHotNews', response.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getSportNews({ commit }): Promise<void> {
      try {
        const response = await apiConfig.getSportNew();
        if (response.status === 200 && response.data) {
          commit('setSportNews', response.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});
