<template lang="pug">
  v-row
    v-col
      v-btn(:disabled="!item.used && !findCondition(item.condition)" :color="item.color" v-for="item in skills") {{ item.name }}

</template>

<script>
import wizard_skills from "@/assets/js/wizard_skills";

export default {
  data: () => ({
    skills: wizard_skills,
  }),
  methods: {
    findCondition(condition) {
      if (condition == this.$store.state.encounterType) {
        return true;
      }
    }
  }
};
</script>
