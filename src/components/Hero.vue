<template lang="pug">
  v-container
    v-row
      h2.pl-3 Hero Window
    v-row
      v-col(cols="4")
        ExperienceBar
        HealthBar
        StaminaBar
      v-col(cols="4")
        Inventory
      v-col(cols="4")
        Skills
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
};
</script>
<style scoped>
.main {
  border: 1px solid #000;
}
</style>
