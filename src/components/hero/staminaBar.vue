<template lang="pug">
  v-row(no-gutters)
    h6.mr-5 {{ label }}:
    v-chip.pa-0(v-for="(resource, i) in maxStamina" :key="i" x-small label :color="resourceColor()")
      v-avatar(center)
        v-icon mdi-star

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
      return "yellow lighten-3";
    },
  },
  created() {
    eventBus.$on("characterSet", () => {
      this.value = this.$store.state.maxStamina;
      this.maxStamina = this.$store.state.maxStamina;
    });
  },
};
</script>
