<template lang="pug">
    v-icon(:color="color") {{ icon }}
</template>

<script>
export default {
  props: {
    event: { type: String, default: "" },
  },
  data: () => ({
    color: "",
    icon: "",
  }),
  created() {
    this.createIcon();
  },
  watch: {
    event(val) {
      if (val) {
        this.createIcon();
      }
    },
  },
  methods: {
    createIcon() {
      switch (this.event) {
        case "freeport":
          this.color = "blue";
          this.icon = "mdi-city";
          break;
        case "rest":
          this.color = "black";
          this.icon = "mdi-sleep";
          break;
        case "monster":
          this.color = "yellow";
          this.icon = "mdi-alert";
          break;
        case "travel":
          this.color = "brown";
          this.icon = "mdi-walk";
          break;
        case "event":
          this.color = "green";
          this.icon = "mdi-help";
          break;
        case "highkeep":
          this.color = "black";
          this.icon = "mdi-chess-rook";
          break;
        default:
          this.color = "grey";
          this.icon = "mdi-circle-outline";
          break;
      }
    },
  },
};
</script>
