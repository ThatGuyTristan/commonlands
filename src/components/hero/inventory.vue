<template lang="pug">
  v-row
    v-col
      v-chip.ma-auto(v-for="(item, i) in value" :key="i" @click="doThing(item.method)") {{ item.name }}
      v-chip(disabled v-for="n in emptySpots") Empty
</template>

<script>
import itemLibrary from "@/assets/js/items.js";
import { eventBus } from "@/main";

export default {
  data() {
    return {
      value: [],
    };
  },
  computed: {
    inventorySize() {
      return this.$store.state.maxInventory;
    },
    emptySpots() {
      return this.inventorySize - this.value.length;
    },
  },
  created() {
    eventBus.$on("difficultySet", () => {
      this.fillInventory();
    });
  },
  methods: {
    findItem() {
      let i = Math.floor(itemLibrary.length * Math.random());
      return itemLibrary[i];
    },
    addItemtoInventory(item) {
      this.value.push(item);
    },
    fillInventory() {
      let quantity = (4 - this.$store.state.difficulty);
      let n = 0;
      while (n < quantity) {
        let item = this.findItem();
        this.addItemtoInventory(item);
        n++;
      }
    },
  },
};
</script>
