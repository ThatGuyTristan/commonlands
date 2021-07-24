<template lang="pug">
  v-row(no-gutters)
    h6.mr-2 {{ label }}:
    v-chip.px-0.mx-1(v-for="(resource, i) in value" :key="i" x-small label :color="resourceColor()") {{ value }} / {{ maxStamina }}
      v-avatar(center)
        v-icon(color="yellow") mdi-star
    v-btn(@click="value--") test
</template>

<script>
export default {
  data() {
    return {
      label: "Stamina",
      value: 0,
    };
  },
  methods: {
    resourceColor() {
      return "yellow darken-3";
    },
  },
  computed: {
    maxStamina() {
      return this.$store.state.maxStamina;
    },
  },
  watch: {
    //make sure we never exceed make stamina
    value(val) {
      if (val >= this.maxStamina) {
        this.value = this.maxStamina;
      }
    },
  },
  created() {
    this.$eventHub.$on("characterSet", () => {
      this.value = this.$store.state.maxStamina;
    });
    this.$eventHub.$on("levelUp", () => {
      //do not gain stamina on levelUp while playing on Hard
      if (this.$store.state.difficulty != 3) this.value++;
    });
    this.$eventHub.$on("rest", () => {
      //adjust stamina gained by difficulty
      this.value += (5 - this.$store.state.difficulty);
    });
    this.$eventHub.$on("spendStamina", () => {
      this.value -= 1;
    })
  },
};
</script>
