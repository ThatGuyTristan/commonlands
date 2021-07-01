<template lang="pug">
  v-progress-linear(:value="value" height=10 background-color="red darken-4" color="red")
    template(v-slot:default="{ value }")
      .text-caption.white--text  {{ value }} %
</template>

<script>
export default {
  data() {
    return {
      value: 100,
    };
  },
  created() {
    setInterval(this.takeDamage, 1500);
    setInterval(this.healDamage, 6000);
  },
  watch: {
    value(val) {
      if (val <= 0) {
        console.log("player dead!");
      }
    },
  },
  methods: {
    takeDamage() {
      this.value -= 10;
    },
    healDamage() {
      this.value += 4;
    },
  },
};
</script>
