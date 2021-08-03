<template lang="pug">
  div
    v-card(v-if="coerced")
      h3 The orc bandit is coerced
    v-card(v-else)
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
</template>

<script>
import skillTests from "@/mixins/skillTests";
import skillTests from "@/mixins/setSnack";

export default {
  mixins: [skillTests, setSnack],
  data: () => ({
    name: "a desparate bandit",
    maxHealth: 8,
    health: 8,
    accuracy: 60,
    coerceResistance: 30,
    shoutResistancec: 80,
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
    attack(value=4, modifier){
      if(shaken){
        this.setSnack("The bandit is shaken and cannot attack", "grey");
        return;
      }

      if(this.spellSuccessful(this.accuracy)){
        //Find the monster's damage
        let damage = Math.ceil(Math.random() * (value + modifider))
        this.setSnack("The bandit slashes at you with a dagger!", "red" )
        this.$eventHub.$emit("damagePlayer", damage);
      } else {
        this.setSnack("The bandit slashes for your body, but misses.", "grey")
      }
    },
    coerceResponse() {
      if (this.spellSuccessful(this.resistance)) {
        this.setSnack("You coerce the bandit into giving up an item.", "orange")
        this.coerced = true;
      } else {
        this.attack(_value, 2)
      }
    },
    shoutResponse() {
      if (this.spellSuccessful()) {
        this.setSnack("The bandit is shaken!", "orange")
        this.accuracy -= 15;
        this.shaken = true;
      } else {
        this.setSnack("The bandit is enraged by your shout and lashes out!")
        this.attack(_value, 2);
      }
    },
    disarmResponse() {
      if (this.spellSuccessful()) {
        this.setSnack("You disarm the bandit!", "orange")
        this.accuracy -= 20;
      } else {
        this.setSnack("The bandit ripostes your attempt to disarm him.", "red")
        this.attack;
      }
    },
    lightningResponse() {
      if (this.spellSuccessful(50)) {
        this.setSnack("Lightning strikes the bandit!", "orange")
        this.health -= 8;
      } else {
        this.setSnack("The bandit leaps out of the way of your lightning strike", "grey")
      }
    },
  },
};
</script>
