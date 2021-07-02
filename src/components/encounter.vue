<template lang="pug">
  div
    h2 Encounter Window
</template>

<script>
export default {
  components: {
    Monster: () => import("./encounters/monster.vue"),
    Difficulty: () => import("./encounters/difficulty.vue"),
    Travel: () => import("./encounters/travel.vue"),
    Event: () => import("./encounters/event.vue"),
    Rest: () => import("./encounters/rest.vue"),
  }
}
</script>