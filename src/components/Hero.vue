<template lang="pug">
  div
    div
      h2 Hero Window
    div
      HealthBar
    div
      ExperienceBar
    div
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
