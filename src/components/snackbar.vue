<template lang="pug">
  v-snackbar(v-model="show" :color="color" rounded="pill")
    h2.text-center.my-auto {{ message }}
</template>

<script>
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
    this.$eventHub.$on("setSnack", this.setSnack);
  },
  methods: {
    setSnack: function (obj) {
      this.message = obj.text;
      this.color = obj.color;
      this.show = true;
    },
  },
};
</script>
