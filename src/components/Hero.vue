<template lang="pug">
  v-container(fluid)
    v-row(no-gutters)
        h5.title.pl-3 {{ displayName }} ||
        h5.pl-3 Level {{ $store.state.level }}
        h5.pl-3 {{ $store.state.characterClass}}
    v-row
      v-col(cols="4")
        div.stat
          HealthBar
        div.stat
          ExperienceBar
        div.stat
          StaminaBar
      v-col(cols="4")
      v-col(cols="4")
        Skills
        Inventory
</template>

<script>
export default {
  components: {
    HealthBar: () => import("@/components/hero/healthBar"),
    ExperienceBar: () => import("@/components/hero/experienceBar"),
    StaminaBar: () => import("@/components/hero/staminaBar"),
    Inventory: () => import("@/components/hero/inventory"),
    Skills: () => import("@/components/hero/skills"),
  },
  data: () => ({
    displayName: null,
  }),
  computed: {
    characterName() {
      return this.$store.state.name;
    },
  },
  watch: {
    characterName(val) {
      this.displayName = val;
    },
  },
};
</script>
<style scoped>
.main {
  border: 1px solid #000;
}

.stat {
  height: 50px;
}
</style>
