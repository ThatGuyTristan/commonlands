<template lang="pug">
  v-row(no-gutters)
    h6 Health:
    v-progress-linear(rounded :value="currentHealthPercent" height=10 background-color="red darken-4" color="green")
      .text-caption.white--text  {{ value }} / {{ maxHealth}}
</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      value: 0,
      maxHealth: 0,
    };
  },
  computed: {
    currentHealthPercent() {
      return (this.value / this.maxHealth) * 100;
    },
  },
  created() {
    eventBus.$on("difficultySet", () => {
      this.value = this.$store.state.maxHealth;
      this.maxHealth = this.$store.state.maxHealth;
    });
    eventBus.$on("usePotion", () => {
      this.healDamage(10);
    });
    eventBus.$on("levelUp", () => {
      this.maxHealth = this.$store.state.maxHealth;
      this.healDamage(5 - this.$store.state.difficulty)
    })
    setInterval(this.takeDamage, 1500);
    // setInterval(this.healDamage, 6000);
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
    healDamage(heal) {
      if (this.value < 0 || this.value >= this.maxHealth) {
        return;
      }
      eventBus.$emit("setSnack", {
        text: "You have been healed.",
        color: "green",
      });
      this.value += heal;
    },
  },
};
</script>
