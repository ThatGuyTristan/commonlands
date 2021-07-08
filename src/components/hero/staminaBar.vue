<template lang="pug">
  v-row(no-gutters)
    h6.mr-2 {{ label }}:
    v-chip.px-0.mx-1(v-for="(resource, i) in maxStamina" :key="i" x-small label :color="resourceColor()")
      v-avatar(center)
        v-icon(color="yellow") mdi-star

</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      label: "Stamina",
      value: 0,
      maxStamina: 0,
    };
  },
  methods: {
    resourceColor() {
      return "yellow darken-3";
    },
  },
  created() {
    eventBus.$on("characterSet", () => {
      this.value = this.$store.state.maxStamina;
      this.maxStamina = this.$store.state.maxStamina;
    });
    eventBus.$on("rest", () => {
      this.value + (5 - this.$store.state.difficulty);
    })
  },
};
</script>
