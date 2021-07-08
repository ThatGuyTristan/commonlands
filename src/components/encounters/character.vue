<template lang="pug">
  v-row.justify-center
    v-btn.mx-2(plain color="success" @click="setCharacter(2)") A brave warrior
    v-btn.mr-2(plain @click="setCharacter(1)") A cunning Rogue
    v-btn.ml-2(plain color="error" @click="setCharacter(3)") A jaded wizard
</template>
<script>
import { eventBus } from "@/main";

export default {
  name: "Character",
  methods: {
    setCharacter(num) {
      this.$store
        .dispatch("setCharacter", num)
        .then(() => eventBus.$emit("characterSet"));
    },
  },
  created() {
    eventBus.$emit("setEncounterString", "Who are you?");
  },
};
</script>
