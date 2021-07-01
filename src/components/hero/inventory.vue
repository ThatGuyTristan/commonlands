<template lang="pug">
  v-row
    v-col(cols="5")
      div.mx-auto(v-for="(item, i) in value")
        v-btn(@click="doThing(item.method)") {{ item.name }}
</template>

<script>
import itemLibrary from '@/assets/js/items.js';
import { eventBus } from "@/main";

export default {
  data() {
    return {
      items: itemLibrary,
      value: [],
    };
  },
  created() {
    console.log(this.value);
    this.value = this.value.concat(this.items);
  },
  watch: {
    value(val){
      if (val) console.log('here', val);
    }
  },
  methods: {
    doThing(foo){
      eventBus.$emit(foo);
    },
  },
};
</script>
