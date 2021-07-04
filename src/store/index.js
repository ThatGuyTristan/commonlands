import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    difficulty: 0,
    level: 1,
    maxHealth: 0,
    maxInventory: 0,
    journeySteps: 0,
    experience: 0,
    encounterType: "",
  },
  mutations: {
    setDifficulty(state, value) {
      switch (value) {
        case 1:
          state.maxHealth = 120;
          state.maxInventory = 8;
          state.journeySteps = 7;
          break;
        case 2:
          state.maxHealth = 100;
          state.maxInventory = 5;
          state.journeySteps = 10;
          break;
        case 3:
          state.maxHealth = 90;
          state.maxInventory = 3;
          state.journeySteps = 12;
          break;
        default:
          console.log("SD default");
      }
      console.log("SD,", value * 3);
      state.difficulty = value;
    },
  },
  actions: {
    setDifficulty(context, value) {
      context.commit("setDifficulty", value);
    },
    setLevel() {
      this.state.level++;
    },
  },
  modules: {},
});
