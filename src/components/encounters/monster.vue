<template lang="pug">
  v-row.justify-center
    orcPawn(v-if="monsterId== 1")
    orcKnight(v-if="monsterId == 2")
    bandit(v-if="monsterId == 3")
    hillGiant(v-if="monsterId== 4")
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
    // this.monsterId = Math.ceil(Math.random() * 4);
    this.monsterId = 2;
    this.$eventHub.$emit("setEncounterString", "You encounter a monster!");
  },
};
</script>
