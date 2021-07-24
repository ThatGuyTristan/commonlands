<template lang="pug">
  div
    v-card
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
</template>

<script>
export default {
  data: () => ({
    name: "an orc knight",
    maxHealth: 12,
    health: 12,
    accuracy: 60,
    resistance: 60,
  }),
  created() {
    this.$eventHub.on("coerce", this.coerce);
    this.$eventHub.on("attack", this.coerce);
    this.$eventHub.on("shockOfLightning", this.shockOfLightning);
  },
  watch: {
    health(value) {
      if (value <= 0) {
        this.$eventHub.emit("finishEvent", "monster");
      }
    },
  },
  methods: {
    coerce() {
      this.$eventHub.emit("spendStamina")
      console.log("INSIDE COERECE");
      if (this.rolld100 > this.resistance) {
        console.log("YEAH");
      }
    },
    shockOfLightning() {
      this.$eventHub.emit("spendStamina")
      this.$eventHub.emit("setSnack", {
        text: `Lightning bursts from your palm and tears into ${this.name}`,
        color: "orange",
      });
      this.health -= 10;
    },
  },
};
</script>
