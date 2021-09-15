<template lang="pug">
  v-row.justify-center
    orcPawn(v-if="monsterId == 0")
    orcKnight(v-if="monsterId == 1")
    bandit(v-if="monsterId == 2")
    hillGiant(v-if="monsterId== 3")
</template>

<script>
import monsters from "@/assets/js/monsters";

export default {
  components: {
    orcPawn: () => import("@/components/monsters/orcPawn"),
    orcKnight: () => import("@/components/monsters/orcKnight"),
    bandit: () => import("@/components/monsters/bandit"),
    hillGiant: () => import("@/components/monsters/hillGiant"),
  },
  data: () => ({
    monsters: monsters,
    monster: {},
    monsterId: 0,
  }),
  created() {
    this.monsterId = Math.round(Math.random() * 4);
    let monsterName = this.monsters[this.monsterId].name
    this.$eventHub.$emit("setEncounterString", `You encounter ${monsterName}!`);
  },
};
</script>
