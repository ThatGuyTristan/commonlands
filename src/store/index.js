import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    difficulty: 0,
    level: 1,
    maxHealth: 0,
    maxInventory: 0,
    maxStamina: 0,
    journeySteps: 0,
    experience: 0,
    character: 0,
    characterClass: "",
    encounterType: "character",
  },
  mutations: {
    setDifficulty(state, value) {
      switch (value) {
        //easy
        case 1:
          state.maxHealth += 5;
          state.maxInventory = 8;
          state.journeySteps = 7;
          break;
        //normal
        case 2:
          state.maxHealth += 3;
          state.maxInventory = 5;
          state.journeySteps = 10;
          break;
        //hard
        case 3:
          state.maxInventory = 3;
          state.journeySteps = 12;
          break;
        default:
          console.log("Difficulty error");
      }
      state.encounterType = "prompt";
      state.difficulty = value;
    },
    setCharacter(state, value) {
      switch (value) {
        //warrior
        case 1:
          state.maxHealth += 12;
          state.maxStamina = 4;
          state.character = value;
          state.characterClass = "Warrior"
          break;
        //ranger
        case 2:
          state.maxHealth += 10;
          state.maxStamina = 5;
          state.character = value;
          state.characterClass = "Ranger"
          break;
        //wizard
        case 3:
          state.maxHealth += 8;
          state.maxStamina = 3;
          state.character = value;
          state.characterClass = "Wizard"
          break;
        default:
          console.log("Character error");
      }
      state.encounterType = "difficulty";
    },
    setName(state, value){
      state.name = value;
    },
    setEncounter(state, value){
      state.encounterType = value
    },
    levelUp(state){
      state.maxHealth += 5 - this.state.difficulty;
      state.level++;
      if (this.state.level % 3 === 0){
        console.log("HEYO");
        state.maxStamina++;
      }
    }
  },
  actions: {
    setDifficulty(context, value) {
      context.commit("setDifficulty", value);
    },
    setCharacter(context, value) {
      context.commit("setCharacter", value);
    },
    setLevel(context) {
      context.commit("levelUp")
    },
    setName(context, value) {
      context.commit("setName", value)
    },
    setEncounter(context, value){
      context.commit("setEncounter", value)
    }
  },
  modules: {},
  getters: {
    getCharacterClass: (state) => state.character,
  },
});
