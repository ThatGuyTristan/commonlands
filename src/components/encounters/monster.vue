<template lang="pug">
  v-row.justify-center
    orcPawn
</template>

<script>
import monsters from "@/assets/js/monsters";

export default {
  components: {
    orcPawn: () => import("@/components/monsters/orcPawn")
  },
  data: () => ({
    monsters: monsters,
    monster: {},
    value: 0,
  }),
  computed: {
    currentHealthPercent() {
      return (this.value / this.maxHealth) * 100;
    },
    maxHealth() {
      return this.monster.health;
    }
  },
  methods: {
    pickMonster() {
      let i = Math.round(Math.random() * this.monsters.length);
      this.monster = this.monsters[i];
      this.value = this.monster.health
      this.$eventHub.$emit("setEncounterString", "Monster");
      this.$eventHub.$emit("setSnack", {
        text: `You have encountered a ${this.monster.name}.`,
        color: "grey",
      });
    },
  },
  created() {
    this.pickMonster();
  },
};
</script>
