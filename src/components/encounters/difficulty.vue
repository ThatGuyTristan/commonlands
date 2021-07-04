<template lang="pug">
  v-row
    v-btn(color="primary" @click="setDifficulty(1)") Easy
    v-btn(color="alert" @click="setDifficulty(2)") Normal
    v-btn(color="warning" @click="setDifficulty(3)") Hard
</template>
<script>
import { eventBus } from "@/main";

export default {
  name: "Difficulty",
  methods: {
    setDifficulty(num) {
      this.$store
        .dispatch("setDifficulty", num)
        .then(() => eventBus.$emit("difficultySet"));
    },
  },
};
</script>
