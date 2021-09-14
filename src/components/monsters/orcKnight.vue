<template lang="pug">
  div
    v-card
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
        div
          h3(v-if="coerced") The Orc Knight is under your coercion
          h3(V-else) The orc scowls at you, ready to attack!
      v-card-actions(v-if="coerced")
        v-btn(@click="skewer") Impale itself
        v-spacer
        v-btn(@click="escort") Escort you forward
</template>

<script>
import skillTests from "@/mixins/skillTests";

export default {
  mixins: [skillTests],
  data: () => ({
    name: "an orc knight",
    maxHealth: 8,
    health: 8,
    accuracy: 60,
    coerceResistance: 60,
    shoutResistance: 60,
    shaken: false,
    coerced: false
  }),
  mounted() {
    this.$eventHub.$emit("setSnack", { text: "You encounter an orc knight!", color: "grey" });
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
    monsterAttack(bonus){
      this.$eventHub.$eventHub("damagePlayer", 5 + bonus)
    },
    skewer(){
      this.$eventHub.$emit("setSnack", { text: "You order the orc to impale itself!", color: "orange" })
      this.health = 0;
    },
    escort(){
      this.$eventHub.$emit("setSnack", { text: "You order the orc to escort you safely.", color: "green" })
      this.$eventHub.$emit("escorted", "escorted");
      this.health = -0;
    },
    coerceResponse() {
      if (this.spellSuccessful(this.coerceResistance)) {
        this.coerced = true;
      } else {
        this.monsterAttack(3)
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
      if (this.spellSuccessful()) {
        this.health -= 10;
        this.$eventHub.$emit("setSnack", { text: "The orc knight's body convulses with lightning!", color: "orange" })
      } else {
        this.$eventHub.$emit("setSnack", { text: "The orc knight dives beneath your lightning", color: "white" })
      }
    },
  },
};
</script>
