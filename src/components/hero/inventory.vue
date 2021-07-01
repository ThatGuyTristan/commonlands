<template lang="pug">
  div
    v-row
      v-col(cols="5")
        div.mx-auto(v-for="(item, i) in items") {{ item }}

</template>

<script>
export default {
  data() {
    return {
      items: [
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
      ],
    };
  },
  methods: {},
};
</script>
