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
import setSnack from "@/mixins/setSnack";

export default {
  mixins: [skillTests, setSnack],
  data: () => ({
    name: "an orc knight",
    maxHealth: 8,
    health: 8,
    accuracy: 60,
    resistance: 60,
    coerced: false,
    shaken: false,
  }),
  mounted() {
    this.setSnack("You encounter an orc pawn!", "grey");
    // this.$eventHub.on("attack", this.attack);
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
    spellSuccessful() {
      return this.rolld100 > this.resistance;
    },
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
      if (this.spellSuccessful(this.resistance)) {
        console.log("lightning strike damages OK and lowers accuracy");
      } else {
        console.log("OK resisted thunder");
      }
    },
  },
};
</script>
