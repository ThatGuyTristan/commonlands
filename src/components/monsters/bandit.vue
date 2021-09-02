<template lang="pug">
  div
    v-card
      v-card-title
        .title {{ name }}
        v-spacer
        .caption {{ health }} / {{ maxHealth }}
      v-card-text
        div
          h3(v-if="coerced") The bandit is under your coercion.
          h3(v-else) The bandit scowls at you, ready to attack!
      v-card-actions(v-if="coerced")
        v-btn(@click="youShallPass") Order him to let you pass. 
        v-spacer
        v-btn(@click="emptyPockets") Tell him to empty his pockets.
</template>

<script>
import skillTests from "@/mixins/skillTests";
import setSnack from "@/mixins/setSnack";
import items from "@/assets/js/items"

export default {
  mixins: [skillTests, setSnack],
  data: () => ({
    name: "a desparate bandit",
    maxHealth: 8,
    health: 8,
    accuracy: 60,
    coerceResistance: 30,
    shoutResistance: 80,
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
    youShallPass(){
      this.$eventHub.$emit("setSnack", { text: "The bandit steps aside and lets you pass.", color: "orange" })
      this.$eventHub.$emit("finishEvent", "monster");
    },
    emptyPockets(){
      let item = items[Math.round(Math.random() * items.length)]
      this.$eventHub.$emit("loot", item);
      this.$eventHub.$emit("setSnack", { text: `The bandit hands you a ${item.name}`, color: "green" })
    },
    attack(value = 4, modifier = 0) {
      if (this.shaken) {
        this.setSnack("The bandit is shaken and cannot attack", "grey");
        return;
      }

      if (this.spellSuccessful(this.accuracy)) {
        //Find the monster's damage
        let damage = Math.ceil(Math.random() * (value + modifier));
        this.setSnack("The bandit slashes at you with a dagger!", "red");
        this.$eventHub.$emit("damagePlayer", damage);
      } else {
        this.setSnack("The bandit slashes for your body, but misses.", "grey");
      }
    },
    coerceResponse() {
      console.log("uuhhhh");
      if (this.spellSuccessful(this.coerceResistance)) {
        this.setSnack(
          "You coerce the bandit into giving up an item.",
          "orange"
        );
        this.coerced = true;
      } else {
        this.attack(_0, 2);
      }
    },
    shoutResponse() {
      if (this.spellSuccessful()) {
        this.setSnack("The bandit is shaken!", "orange");
        this.accuracy -= 15;
        this.shaken = true;
      } else {
        this.setSnack("The bandit is enraged by your shout and lashes out!");
        this.attack(_0, 2);
      }
    },
    disarmResponse() {
      if (this.spellSuccessful()) {
        this.setSnack("You disarm the bandit!", "orange");
        this.accuracy -= 20;
      } else {
        this.setSnack("The bandit ripostes your attempt to disarm him.", "red");
        this.attack;
      }
    },
    lightningResponse() {
      if (this.spellSuccessful(50)) {
        this.setSnack("Lightning strikes the bandit!", "orange");
        this.health -= 8;
      } else {
        this.setSnack(
          "The bandit leaps out of the way of your lightning strike",
          "grey"
        );
      }
    },
  },
};
</script>
