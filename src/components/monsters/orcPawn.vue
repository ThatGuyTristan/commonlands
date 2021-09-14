<template lang="pug">
  div
    v-card(v-if="coerced")
      h3 {{ name }} is coerced
    v-card(v-else)
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
      v-card-actions(v-if="coerced")
        v-btn(@click="sendToFreeport")
        v-spacer
        v-btn(@click="protect")
</template>

<script>
import skillTests from "@/mixins/skillTests";
import setSnack from "@/mixins/setSnack";

export default {
  mixins: [skillTests, setSnack],
  data: () => ({
    name: "an orc pawn",
    maxHealth: 3,
    health: 3,
    accuracy: 40,
    coerceResistance: 15,
    shoutResistance: 0,
    coerced: false,
    shaken: false,
  }),
  mounted() {
    this.setSnack("You encounter an orc pawn!", "grey");
    //this.$eventHub.on("attack", this.attack);
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
    sendToFreeport(){
      this.$eventHub.$emit("setSnack", { text: "You send the orc pawn against the Ogre camps. You don't suspect he'll live very long.", color: "grey" })
    },
    protect(){
      this.$eventHub.$emit("addProtector", 3)
      this.$eventHub.$emit("setSnack", { text: "You order the orc pawn to follow you!", color: "green" })
    },
    coerceResponse() {
      console.log("INSIDE COERECE");
      if (this.spellSuccessful(this.coerceResistance)) {
        this.coerced = true;
      } else {
        console.log("monster attacks with bonus");
      }
    },
    shoutResponse() {
      console.log("INSIDE SHOUT RESPONSE");
      if (this.spellSuccessful(this.shoutResistance)) {
        this.setSnack("The orc pawn flees from your fury!", "orange");
        this.$eventHub.$emit("finishEvent", "monster");
      } else {
        this.setSnack(
          "Your shout fetters off into a burp. The orc pawn is amused."
        );
        console.log("Shout failed!");
      }
    },
    disarmResponse() {
      console.log("INSIDE DISARM");
      if (this.spellSuccessful(10)) {
        this.setSnack(
          "You knock the orc pawn's weapon from its hands!",
          "orange"
        );
        this.accuracy = 0;
      } else {
        console.log("monster attacks");
      }
    },
    lightningResponse() {
      if (this.spellSuccessful(this.resistance)) {
        this.setSnack("Lightning scorches the skin of the orc pawn!", "orange");
        this.health -= 10;
      } else {
        this.setSnack("The orc pawn dives under your lightning bolt.", "grey");
      }
    },
  },
};
</script>
