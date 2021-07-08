<template lang="pug">
  v-container(fluid)
    .title.mt-0 Encounter Window -- {{ encounterString }}
      v-card(flat dark)
        v-card-text.text--center
          Character(v-if="encounterType == 'character'")
          Difficulty(v-if="encounterType == 'difficulty'")
          Monster(v-if="encounterType == 'monster'")
          Travel(v-if="encounterType == 'travel'")
          Event(v-if="encounterType == 'event'")
          Rest(v-if="encounterType == 'rest'")


</template>

<script>
export default {
  components: {
    Character: () => import("./encounters/character.vue"),
    Monster: () => import("./encounters/monster.vue"),
    Difficulty: () => import("./encounters/difficulty.vue"),
    Travel: () => import("./encounters/travel.vue"),
    Event: () => import("./encounters/event.vue"),
    Rest: () => import("./encounters/rest.vue"),
  },
  data: () => ({
    encounterString: "Choose your difficulty",
  }),
  computed: {
    encounterType() {
      return this.$store.state.encounterType;
    },
  },
};
</script>
