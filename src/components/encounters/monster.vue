<template lang="pug">
  v-row.justify-center
    h2(:class="monster.threat") {{ monster.name }}
    h4 {{ monster.threat }}
    h6 {{ monster.attack }}
</template>

<script>
import { eventBus } from "@/main";
import monsters from "@/assets/js/monsters";

export default {
  data: () => ({
    monsters: monsters,
    monster: null,
  }),
  methods: {
    pickMonster() {
      let i = Math.round(Math.random() * this.monsters.length);
      this.monster = this.monsters[i];
      eventBus.$emit("setEncounterString", "Monster");
      eventBus.$emit("setSnack", {
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
