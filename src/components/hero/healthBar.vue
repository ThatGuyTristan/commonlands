<template lang="pug">
  v-row(no-gutters)
    h6 Health:
    v-progress-linear.mb-2(rounded :value="currentHealthPercent" height=10 background-color="red darken-4" color="green")
      .text-caption.white--text {{ captionText }}
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
    captionText(){
      return this.value > 0 ? `${this.value} / ${this.maxHealth}` : 'You have died'
    }
  },
  created() {
    eventBus.$on("characterSet", () => {
      this.value = this.$store.state.maxHealth;
      this.maxHealth = this.$store.state.maxHealth;
    });
    eventBus.$on("usePotion", () => {
      this.healDamage(10);
    });
    eventBus.$on("levelUp", () => {
      this.maxHealth = this.$store.state.maxHealth;
      this.healDamage(5 - this.$store.state.difficulty);
    });
    setInterval(this.takeDamage, 1500);
    // setInterval(this.healDamage, 6000);
  },
  watch: {
    value(val) {
      if (val <= 0) {
        eventBus.$emit("setSnack", {
          text: "You have died.",
          color: "red"
        })
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
