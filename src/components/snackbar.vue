<template lang="pug">
  v-snackbar(v-model="show" :color="color" rounded="pill")
    h2.text-center {{ message }}
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "Snackbar",
  data() {
    return {
      show: false,
      message: null,
      color: null,
    };
  },
  created() {
    eventBus.$on("setSnack", this.setSnack);
  },
  methods: {
    setSnack: function (obj) {
      // console.log(obj);
      this.message = obj.text;
      this.color = obj.color;
      this.show = true;
    },
  },
};
</script>
