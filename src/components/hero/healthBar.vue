<template lang="pug">
  v-row(no-gutters)
    h6 Health:
    v-progress-linear.mb-2(rounded :value="currentHealthPercent" height=10 background-color="red darken-4" color="green")
      .text-caption.white--text(v-if="!isNaN(value)") {{ captionText }}
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    currentHealthPercent() {
      return (this.value / this.maxHealth) * 100;
    },
    captionText() {
      return `${this.value} / ${this.maxHealth}`;
    },
    maxHealth() {
      return this.$store.state.maxHealth;
    },
  },
  created() {
    this.$eventHub.$on("difficultySet", () => {
      this.value = this.$store.state.maxHealth;
    });
    this.$eventHub.$on("heal", (amount) => {
      this.healDamage(amount);
    });
    this.$eventHub.$on("levelUp", () => {
      this.healDamage(5 - this.$store.state.difficulty);
    });
    this.$eventHub.$on("damagePlayer", this.takeDamage());
  },
  watch: {
    value(val) {
      if (val < 0) {
        this.$eventHub.$emit("setSnack", {
          text: "You have died.",
          color: "red",
        });
        console.log("player dead!");
      }

      if (val >= this.maxHealth) {
        this.value = this.maxHealth;
      }
    },
  },
  methods: {
    takeDamage(damage) {
      if (this.value < 0) {
        return;
      }
      this.$eventHub.$emit("setSnack", { text: `You take ${damage} points of damage!`, color: "red"})
      this.value -= damage;
    },
    healDamage(heal) {
      //make sure we never heal above max
      if (this.value < 0 || this.value >= this.maxHealth) {
        return;
      }
      this.$eventHub.$emit("setSnack", {
        text: `You have been healed for ${heal}.`,
        color: "green",
      });
      this.value += heal;
    },
  },
};
</script>
