<template lang="pug">
  v-row(no-gutters)
    h6.ml-4 Freeport Status:
    v-progress-linear.my-2.mx-16(
      :value="status"
      height="5"
      background-color="orange darken-2"
      color="grey")
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
    }
  },
  watch: {
    status(val) {
      if (val <= 0) {
        this.$eventHub.$emit("setSnack", {
          text: "Freeport has been conquered.",
          color: "red",
        });
      }
    },
  },
};
</script>
