<template lang="pug">
  v-snackbar(v-model="show") {{ message }}
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "Snackbar",
  data() {
    return {
      show: false,
      message: null,
    };
  },
  created() {
    eventBus.$on("setSnack", this.setSnack);
  },
  methods: {
    setSnack: function (message) {
      console.log(message);
      this.message = message;
      this.show = true;
    },
  },
};
</script>
