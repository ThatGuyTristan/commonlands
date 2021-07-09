<template lang="pug">
  v-row
    v-col
      v-btn(:disabled="!findCondition(item.condition)" :color="item.color" v-for="item in skills") {{ item.name }}
</template>

<script>
import wizard_skills from "@/assets/js/wizard_skills";
import warrior_skills from "@/assets/js/warrior_skills";
import ranger_skills from "@/assets/js/ranger_skills";

export default {
  data: () => ({
    wizard_skills: wizard_skills,
    warrior_skills: warrior_skills,
    ranger_skills: ranger_skills,
    skills: [],
  }),
  computed: {
    characterClass() {
      return this.$store.state.character;
    },
  },
  watch: {
    characterClass(val) {
      this.setButtons(val);
    },
  },
  methods: {
    findCondition(condition) {
      if (condition == this.$store.state.encounterType) {
        return true;
      }
    },
    setButtons(val) {
      switch (val) {
        case 1:
          this.skills = this.warrior_skills;
          break;
        case 2:
          this.skills = this.ranger_skills;
          break;
        case 3:
          this.skills = this.wizard_skills;
          break;
        default:
          console.log("invalid class");
      }
    },
  },
};
</script>
