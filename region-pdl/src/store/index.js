import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSceneIndex: 0,
    nbScenes: 9,
    character: ""
  },
  mutations: {
    nextScene(state, inc) {
      state.currentSceneIndex += inc;
    },
    setScene(state, sceneId) {
      state.currentSceneIndex = sceneId;
    },
    setCharacter(state, name) {
      state.character = name;
    }
  },
  actions: {
    nextScene({ commit }, { inc }) {
      commit('nextScene', inc || 1);
    },
    setScene({ commit }, { sceneId }) {
      commit('setScene', sceneId);
    },
    setCharacter({ commit }, { name }) {
      commit('setCharacter', name);
    }
  },
  getters: {
    getSceneId: state => {
      return state.currentSceneIndex;
    },
    getCharacter: state => {
      return state.character === "dubois"
        ? "Mme Dubois"
        : "M. Moreau";
    },
    getCharacterGender: state => {
      return state.character === "dubois"
        ? "mme"
        : "m";
    },
    getSceneTransition: state => {
      return state.currentSceneIndex === 0 ? 'fade' : 'slide';
    }
  },
  modules: {}
});
