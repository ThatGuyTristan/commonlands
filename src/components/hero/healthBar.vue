<template lang="pug">
  v-progress-linear(:value="value" height=10 background-color="red darken-4" color="red")
    template(v-slot:default="{ value }")
      .text-caption.white--text  {{ Math.round((value / maxHealth) * 100) }} % ({{ value }})
</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    maxHealth() {
      return this.$store.state.health;
    },
  },
  created() {
    this.value = this.maxHealth;
    eventBus.$on("usePotion", () => {
      this.healDamage();
    });
    setInterval(this.takeDamage, 1500);
    setInterval(this.healDamage, 6000);
  },
  watch: {
    value(val) {
      if (val <= 0) {
        console.log("player dead!");
      }
    },
  },
  methods: {
    takeDamage() {
      if (this.value < 0) {
        return;
      }
      this.value -= 10;
    },
    healDamage() {
      if (this.value < 0 || this.value >= this.maxHealth) {
        return;
      }
      eventBus.$emit("setSnack", {
        text: "You have been healed.",
        color: "green",
      });
      this.value += 4;
    },
  },
};
</script>
