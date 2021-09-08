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
