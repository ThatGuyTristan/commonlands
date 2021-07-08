<template lang="pug">
  v-row.justify-center
    v-btn.mr-2(plain color="success" @click="setDifficulty(1)") Easy
    v-btn.mx-2(plain color="alert" @click="setDifficulty(2)") Normal
    v-btn.ml-2(plain color="error" @click="setDifficulty(3)") Hard
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
  created() {
    eventBus.$emit("setEncounterString", "Choose your difficulty");
  },
};
</script>
