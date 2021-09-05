<template lang="pug">
  v-row.justify-center.align-center
    v-btn.mr-2(plain color="success" @click="setDifficulty(1)") Easy
    v-btn.mx-2(plain color="alert" @click="setDifficulty(2)") Normal
    v-btn.ml-2(plain color="error" @click="setDifficulty(3)") Hard
</template>
<script>
export default {
  name: "Difficulty",
  methods: {
    setDifficulty(num) {
      this.$store.dispatch("setDifficulty", num).then(() => 
          this.$eventHub.$emit("gainExperience", 100 - num * 20),
          this.$eventHub.$emit("difficultySet"),
          this.$eventHub.$emit("setSnack", {
            text: "You set out from Freeport",
            color: "blue",
        }),
        this.$eventHub.$emit("finishEvent", "freeport")
      );
    },
  },
  created() {
    this.$eventHub.$emit("setEncounterString", "Choose your difficulty");
  },
};
</script>
