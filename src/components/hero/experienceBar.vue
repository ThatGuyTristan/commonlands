<template lang="pug">
  v-progress-linear(:value="progress" height=3 background-color="grey" color="yellow")
</template>

<script>
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
  methods: {
    gainXp() {
      this.progress += 1;
      // console.log(this.progress);
    },
  },
};
</script>
