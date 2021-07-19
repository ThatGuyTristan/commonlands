<template lang="pug">
  v-row.justify-center
    v-btn Sneak
    v-btn Disarm
    v-btn Forage
</template>

<script>
export default {
  computed: {
    characterLevel(){
      return this.$store.state.level;
    }
  },
  methods: {
    sneak(){},
    disarm(){},
    forage(){},
  }
}

</script>