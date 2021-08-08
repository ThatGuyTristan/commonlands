<template lang="pug">
  div
    v-card(v-if="coerced")
      h3 The giant is coerced
    v-card(v-else)
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
</template>

<script>
import skillTests from "@/mixins/skillTests";

export default {
  mixins: [skillTests],
  data: () => ({
    name: "a hill giant",
    maxHealth: 20,
    health: 20,
    accuracy: 30,
    resistance: 80,
    coerced: false,
    shaken: false,
  }),
  mounted() {
    this.$eventHub.on("attack", this.attack);
    this.$eventHub.on("coerce", this.coerceResponse);
    this.$eventHub.on("shout", this.shoutResponse);
    this.$eventHub.on("disarm", this.disarmResponse);
    this.$eventHub.on("lightning", this.lightningResponse);
  },
  watch: {
    health(value) {
      if (value <= 0) {
        this.$eventHub.emit("finishEvent", "monster");
      }
    },
  },
  methods: {
    coerceResponse() {
      console.log("INSIDE COERECE");
      if (this.spellSuccessful(this.resistance)) {
        this.coerced = true;
      } else {
        console.log("giant attacks with bonus");
      }
    },
    shoutResponse() {
      console.log("INSIDE SHOUT RESPONSE");
      if (this.spellSuccessful(this.resistance)) {
        console.log("Shout successfull, giant is shaken");
      } else {
        console.log("Shout failed!");
      }
    },
    disarmResponse() {
      console.log("INSIDE DISARM");
      if (this.spellSuccessful()) {
        console.log("giant disarmed! Accuracy lowered!");
      } else {
        console.log("giant attacks");
      }
    },
    lightningResponse() {
      console.log("INSIDE lightning");
      if (this.spellSuccessful(this.resistance)) {
        this.health -= 10;
        this.accuracy -= 10;
        console.log("lightning strike damages giant and lowers accuracy");
      } else {
        console.log("giant resisted lightning");
      }
    },
  },
};
</script>
