<template lang="pug">
  v-container
    v-row
      h2 Hero Window
    v-row
      ExperienceBar
      HealthBar
      Inventory
</template>

<script>
export default {
  components: {
    HealthBar: () => import("@/components/hero/healthBar"),
    ExperienceBar: () => import("@/components/hero/experienceBar"),
    Inventory: () => import("@/components/hero/inventory"),
  },
};
</script>
<style scoped>
.main {
  border: 1px solid #000;
}
</style>
