<template lang="pug">
  v-row.justify-center
    h4 Who are you?
    v-btn.mr-2(plain color="success" @click="setDifficulty(1)") A cunning Rogue
    v-btn.mx-2(plain color="alert" @click="setDifficulty(2)") A brave warrior
    v-btn.ml-2(plain color="error" @click="setDifficulty(3)") A jaded wizard
</template>
<script>
import { eventBus } from "@/main";

export default {
  name: "Difficulty",
  methods: {
    setDifficulty(num) {
      this.$store
        .dispatch("setClass", num)
        .then(() => eventBus.$emit("classSelected"));
    },
  },
};
</script>
