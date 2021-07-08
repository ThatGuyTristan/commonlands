<template lang="pug">
  v-row.justify-center
    h4 Who are you?
    v-btn.mr-2(plain color="success" @click="setCharacter(1)") A cunning Rogue
    v-btn.mx-2(plain color="alert" @click="setCharacter(2)") A brave warrior
    v-btn.ml-2(plain color="error" @click="setCharacter(3)") A jaded wizard
</template>
<script>
import { eventBus } from "@/main";

export default {
  name: "Character",
  methods: {
    setCharacter(num) {
      console.log(num);
      this.$store
        .dispatch("setClass", num)
        .then(() => eventBus.$emit("classSelected"));
    },
  },
  created(){
    eventBus.$emit("setEncounterString", "Who are you?");
  }
};
</script>
