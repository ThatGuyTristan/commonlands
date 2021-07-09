<template lang="pug">
  v-row(no-gutters)
    h6 Experience:
    v-progress-linear.mb-2(rounded :value="progress" height=10 background-color="grey" color="yellow")
      template(v-slot:default="{ value }")
        .text-caption.black--text Level {{ level }}

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
  computed: {
    level() {
      return this.$store.state.level;
    },
  },
  // Remove this when we're done testing
  created() {
    eventBus.$on("gainExperience", (exp) => this.gainExperience(exp));
  },
  watch: {
    progress(value) {
      if (value >= 100) {
        this.levelUp();
      }
    },
  },
  methods: {
    levelUp() {
      this.$store.dispatch("setLevel");
      eventBus.$emit("levelUp");
      eventBus.$emit("setSnack", {
        text: "Level up!",
        color: "yellow darken-2",
      });
      this.progress -= 100;
    },
    gainExperience(experience) {
      this.progress += experience;
    },
  },
};
</script>
