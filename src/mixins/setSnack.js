export default {
  methods: {
    setSnack(text, color) {
      this.$eventHub.$emit("setSnack", { text: text, color: color });
    },
  },
};
