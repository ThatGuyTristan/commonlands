<template lang="pug">
  v-container(fluid)
    .title.mt-0 Encounter Window -- {{ encounterString }}
      v-card(flat)
        v-card-text.text--center
          Difficulty(v-if="encounterType == 'difficulty'")
          Monster(v-if="encounterType == 'monster'")
          Travel(v-if="encounterType == 'travel'")
          Event(v-if="encounterType == 'event'")
          Rest(v-if="encounterType == 'rest'")


</template>

<script>
export default {
  components: {
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
