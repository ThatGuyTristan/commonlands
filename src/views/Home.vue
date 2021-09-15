<template lang="pug">
  v-container()
    v-row.mb-2(no-gutters)
      v-col
        v-card.mx-auto
          Freeport
          JourneyProgress
        v-card.mx-auto.mt-2
          Hero
    v-row.my-0(no-gutters)
      v-col
        v-card.mx-auto(flat)
          Logger
</template>

<script>
import Logger from "@/components/logger";
import Hero from "@/components/Hero";
import Freeport from "@/components/freeport";
import JourneyProgress from "@/components/progress";

export default {
  name: "Home",

  components: {
    Freeport,
    Logger,
    JourneyProgress,
    Hero,
  },
};
</script>
