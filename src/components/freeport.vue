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
import { eventBus } from "@/main"

export default {
  data: () => ({
    status: 100,
  }),
  created(){
    setInterval(() => { this.reduceStatus(5) }, 1000)
  },
  methods: {
    reduceStatus(num){
      if (this.status > 0) {
        this.status -= num;
      }
    }
  },
  watch:{
    status(val){
      if (val <= 0){
        eventBus.$emit("setSnack", { text: "Freeport has been conquered.", color: "red" })
      }
    }
  }
}
</script>