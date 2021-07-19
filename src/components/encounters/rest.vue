<template lang="pug">
  div
    v-row.justify-center
      h2 {{ prompt }}
    v-row.justify-center
      v-btn.mx-2(v-for="action in actions" @click="emit(action.action, action.value)") {{ action.name }}
</template>
<script>
import { eventBus } from "@/main";
import rest from "@/assets/js/rest.js";

export default {
  name: "Rest",
  data: () => ({
    actions: [
      {
        name: "Meditate",
        action: "rest",
        value: 1,
        subtitle: "Regain Stamina",
      },
      { name: "Cook a meal", action: "heal", value: 3, subtitle: "Heal" },
      {
        name: "Practice Disciplines",
        action: "gainExperience",
        value: 100,
        subtitle: "Gain experience",
      },
    ],
    prompt: "",
  }),
  created() {
    this.prompt = rest[Math.round(Math.random() * rest.length)];
    eventBus.$emit("setEncounterString", "You take a moment to rest");
  },
  methods: {
    emit(emit, _value) {
      console.log(emit, "EMIT");
      eventBus.$emit(emit, _value);
      eventBus.$emit("finishRest");
    },
  },
};
</script>
