<template lang="pug">
  div
    v-card
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
        div
          h3(v-if="coerced") The giant is under your coercion.
          h3(v-else) The giant scowls at you, ready to attack!
      v-card-actions(v-if="coerced")
        v-btn(@click="sendToFreeport") Send it to help Freeport
        v-spacer
        v-btn(@click="drownIt") Tell it to drown itself in Lake Freeport
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
    coerceResistance: 30,
    shoutResistance: 90,
    coerced: false,
    shaken: false,
  }),
  created() {
    this.$eventHub.on("attack", this.attackResponse);
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
    sendToFreeport(){
      this.$eventHub.$emit("reinforceFreeport", 20);
      this.$eventHub.$emit("setSnack", { text: "The giant charges in the direction of the Dark Elven camps!", color: "blue"})

    },
    drownIt(){
      this.$eventHub.$emit("gainExperience", 350);
      this.$eventHub.$emit("setSnack", { text: "The giant trudges into the lake and disappears", color: "orange" })
    },
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
