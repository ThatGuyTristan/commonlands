<template lang="pug">
  v-progress-linear(:value="progress" height=3 background-color="grey" color="yellow")
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "ExperienceBar",
  data() {
    return {
      progress: 20,
    };
  },
  // Remove this when we're done testing
  created() {
    setInterval(this.gainXp, 1500);
  },
  watch: {
    progress(value) {
      if (value >= 100) {
        eventBus.$emit("setSnack", "Level up!");
      }
    },
  },
  methods: {
    gainXp() {
      this.progress += 20;
      // console.log(this.progress);
    },
  },
};
</script>
