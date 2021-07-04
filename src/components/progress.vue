<template lang="pug">
  div
    .subtitle.ml-4 Journey Progress
    v-breadcrumbs.py-2(:items="items" divider='~~~' )
      template(v-slot:item="{ item }")
        v-icon(:color="iconColor(item.text)") {{ displayIcon(item.text)}}
</template>

<script>
export default {
  name: "JourneyProgress",
  data: () => ({
    items: [
      { text: "Freeport" },
      { text: "blank" },
      { text: "blank" },
      { text: "blank" },
      { text: "blank" },
      { text: "blank" },
      { text: "blank" },
    ],
  }),
  methods: {
    iconColor(text) {
      return text == "Freeport" ? "green" : "grey";
    },
    displayIcon(value) {
      switch (value) {
        case "Freeport":
          return "mdi-home";
        default:
          return "mdi-help-rhombus-outline";
      }
    },
  },
};
</script>
