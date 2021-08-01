<template lang="pug">
  div
    v-card(v-if="coerced")
      h3 The orc knight is coerced
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
    name: "an orc knight",
    maxHealth: 80,
    health: 80,
    accuracy: 60,
    resistance: 60,
    coerced: false,
    shaken: false,
  }),
  mounted() {
    this.$eventHub.on("attack", this.attack);
    this.$eventHub.on("coerce", this.coerceResponse);
    this.$eventHub.on("shout", this.shoutResponse);
    this.$eventHub.on("disarm", this.disarmRespnse);
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
      if (this.spellSuccessful()) {
        this.coerced = true;
      } else {
        console.log("monster attacks with bonus");
      }
    },
    shoutResponse() {
      console.log("INSIDE SHOUT RESPONSE");
      if (this.spellSuccessful()) {
        console.log("Shout successfull, monster is shaken");
      } else {
        console.log("Shout failed!");
      }
    },
    disarmResponse() {
      console.log("INSIDE DISARM");
      if (this.spellSuccessful()) {
        console.log("monster disarmed! Accuracy lowered!");
      } else {
        console.log("monster attacks");
      }
    },
    lightningResponse() {
      console.log("INSIDE lightning");
      if (this.spellSuccessful()) {
        console.log("lightning strike damages giant and lowers accuracy");
      } else {
        console.log("bandit resisted thunder");
      }
    },
  },
};
</script>