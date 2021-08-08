<template lang="pug">
  v-row(no-gutters)
    v-col
      v-btn.mx-1(
        :disabled="!findCondition(item.condition)"
        @click="doSpell(item.emit)"
        :color="item.color"
        v-for="item in skills"
      ) {{ item.name }}
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
    skills: [
      {
        name: "Attack",
        used: false,
        color: "red darken-1",
        condition: "monster",
        emit: "attack",
      },
      {
        name: "Flee",
        used: false,
        color: "grey lighten-2",
        condition: "monster",
        emit: "flee",
      },
    ],
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
    doSpell(string) {
      console.log(string);
      this.$stamina -= 1;
      console.log(this.$stamina);
      this.$eventHub.emit(string);
    },
    findCondition(condition) {
      if (condition == this.$store.state.encounterType && this.$stamina) {
        return true;
      }
    },
    setButtons(val) {
      switch (val) {
        case 1:
          this.skills = this.skills.concat(this.warrior_skills);
          break;
        case 2:
          this.skills = this.skills.concat(this.ranger_skills);
          break;
        case 3:
          this.skills = this.skills.concat(this.wizard_skills);
          break;
        default:
          console.log("invalid class");
      }
    },
  },
};
</script>
