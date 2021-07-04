<template lang="pug">
  v-row
    v-col
      v-chip.ma-auto(v-for="(item, i) in value" @click="doThing(item.method)") {{ item.name }}
      v-chip(disabled v-for="n in emptySpots") Empty
</template>

<script>
import itemLibrary from "@/assets/js/items.js";
import { eventBus } from "@/main";

export default {
  data() {
    return {
      items: itemLibrary,
      value: [],
    };
  },
  computed: {
    emptySpots() {
      return this.$store.state.maxInventory - this.value.length;
    },
  },
  created() {
    console.log(this.value);
    this.value = this.value.concat(this.items);
  },
  watch: {
    value(val) {
      if (val) console.log("here", val);
    },
  },
  methods: {
    doThing(foo) {
      console.log("FOO", foo);
      eventBus.$emit(foo);
    },
  },
};
</script>
