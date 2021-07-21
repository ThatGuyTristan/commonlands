<template lang="pug">
  v-container(fluid)
    h3.mt-0.text-center {{ encounterString }}
    v-card(flat dark style="height:100px")
      v-card-text.text-center.align-center
        div(v-if="intro")
          Intro(@done="intro = false")
        div(v-else)
          Prompt(v-if="encounterType == 'prompt'")
          Character(v-if="encounterType == 'character'")
          Difficulty(v-if="encounterType == 'difficulty'")
          Monster(v-if="encounterType == 'monster'")
          Travel(v-if="encounterType == 'travel'")
          Event(v-if="encounterType == 'event'")
          Rest(v-if="encounterType == 'rest'")
</template>

<script>
import { eventBus } from "@/main";

export default {
  components: {
    Intro: () => import("./encounters/introduction.vue"),
    Character: () => import("./encounters/character.vue"),
    Monster: () => import("./encounters/monster.vue"),
    Difficulty: () => import("./encounters/difficulty.vue"),
    Travel: () => import("./encounters/travel.vue"),
    Event: () => import("./encounters/event.vue"),
    Rest: () => import("./encounters/rest.vue"),
    Prompt: () => import("./encounters/prompt.vue")
  },
  data: () => ({
    encounterString: "Choose your difficulty",
    intro: true
  }),
  computed: {
    encounterType() {
      return this.$store.state.encounterType;
    },
  },
  created() {
    eventBus.$on("setEncounterString", this.setString);
  },
  methods: {
    setString(string) {
      this.encounterString = string;
    },
  },
};
</script>
