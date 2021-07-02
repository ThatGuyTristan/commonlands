import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    difficulty: 0,
    level: 1,
    health: 125,
    maxInventory: 5,
    journeySteps: 7,
    experience: 0,
    encounterType: '',
  },
  mutations: {
    setDifficulty(state, value){
      state.difficulty = value;
    }
  },
  actions: {
    setDifficulty(context, value){
      context.commit("setDifficulty", value)
    },
    setLevel(){
      this.state.level ++;
    }
  },
  modules: {},
});
