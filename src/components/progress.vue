<template lang="pug">
  div.text-center
    v-stepper(v-model="value" alt-labels flat)
      v-stepper-header
        template(v-for="(step, i) in steps")
          v-stepper-step(
            :color="stepComplete(i)"
            :complete-icon="completeIcon(i)"
            :complete="i < value"
            :step="i"
            :key="`${i}-step`"
          ) {{ i }}
          v-divider(v-if="i !== steps - 1")
    v-btn(@click="value++" :key="i") increase
</template>

<script>
import { eventBus } from "@/main";
import encounters from "@/assets/js/encounters";

export default {
  name: "JourneyProgress",
  data: () => ({
    value: 0,
    encounters: encounters,
  }),
  methods: {
    completeIcon(val){
      val < this.value.length + 2 ? "$error" : "$edit";
    },
    stepComplete(i) {
      if (i < this.value) {
        return "green";
      } else {
        return "grey";
      }
    },
    iconColor(text) {
      return text == "Freeport" ? "green" : "grey";
    },
    displayIcon(value) {
      switch (value) {
        case "Freeport":
          return "mdi-home";
        default:
          return "mdi-help-rhombus-outline";
      }
    },
  },
  computed: {
    steps() {
      return this.$store.state.journeySteps;
    },
  },
  created() {
    setInterval(() => {
      this.value++;
       }, 1500);
    eventBus.$on("increaseProgress", this.value++);
  },
};
</script>
