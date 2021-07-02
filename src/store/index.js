import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    difficulty: 0,
    level: 1,
    health: 125,
    journeySteps: 7,
    experience: 0,
  },
  mutations: {},
  actions: {
    setDifficulty(arg){
      this.state.difficulty = arg;
      switch (arg) {
        case 1:
          this.state.health += 50;
          break;
        case 2:
          this.state.journeySteps += 3;
          break;
        case 3:
          this.state.health -= 15;
          this.state.journeySteps += 8;
          break;
        default:
          console.log("No difficulty available");
      }
    },
    setLevel(){
      this.state.level ++;
    }
  },
  modules: {},
});
