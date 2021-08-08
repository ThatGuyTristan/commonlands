<template lang="pug">
  v-container.text--center(fluid)
    v-expansion-panels(dark)
      v-expansion-panel(dark)
        v-expansion-panel-header Logs
        v-expansion-panel-content
          v-virtual-scroll(height="200" :items="items" item-height="20")
            template(v-slot:default="{ item }")
              h6(:key="item" :class="item.color") {{ item.text }}
              v-divider
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
  created() {
    this.$eventHub.$on("setSnack", this.ammendObj);
  },
  methods: {
    ammendObj(obj) {
      console.log(obj);
      this.items.unshift(obj);
    },
  },
};
</script>
