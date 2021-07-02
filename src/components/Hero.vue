<template lang="pug">
  v-container
    v-row
      h2.pl-3 Hero Window
    v-row
      v-col(cols="4")
        ExperienceBar
        HealthBar
      v-col(cols="4")
      v-col(cols="4")
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
