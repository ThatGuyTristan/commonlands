<template lang="pug">
  v-row(no-gutters)
    v-progress-linear.my-2.mx-16(
      :value="status"
      height="35"
      background-color="orange darken-2"
      color="grey"
      ) Freeport
</template>

<script>
export default {
  data: () => ({
    status: 110,
  }),
  created() {
    // setInterval(() => { this.reduceStatus(5) }, 1000)
    this.$eventHub.$on("finishEvent", () => {
      this.reduceStatus(10);
    });
    this.$eventHub.$on("finishRest", () => {
      this.reduceStatus(10);
    });
    this.$eventHub.$on("reinforceFreeport", (val) => {
      this.increaseStatus(val);
    })
  },
  methods: {
    reduceStatus(val) {
      if (this.status > 0) {
        this.status -= val;
      }
    },
    increaseStatis(val){
      this.status += val;
    },
  },
  watch: {
    status(val) {
      if (val <= 0) {
        this.$gameOn = false;
        this.$eventHub.$emit("setSnack", {
          text: "Freeport has been conquered.querySelectorAll",
          color: "red",
        });
      }
    },
  },
};
</script>
