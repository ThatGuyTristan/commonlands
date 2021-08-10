<template lang="pug">
  div.justify-center
    v-tooltip(left)
      template(v-slot:activator="{ on }")
        v-btn.mr-2(v-on="on" @click="takeRest" plain color="success") Take a rest
      span Taking a Rest will not advance your journey, but Freeport will suffer while you delay.
    v-btn(plain @click="skipRest") Continue on
</template>

<script>
export default {
  methods: {
    takeRest() {
      this.$store.dispatch("setEncounter", "rest");
    },
    skipRest() {
      this.$store.dispatch("setEncounter", "monster");
    }
  },
};
</script>
