<template lang="pug">
  v-container()
    v-row.mb-2(no-gutters)
      v-col
        v-card.mx-auto
          JourneyProgress
        v-card.mx-auto.mt-2
          Hero
    v-row.my-0(no-gutters)
      v-col
        v-card.mx-auto(flat)
          Encounter

</template>

<script>
import Encounter from "@/components/encounter";
import Hero from "@/components/Hero";
import JourneyProgress from "@/components/progress";

export default {
  name: "Home",

  components: {
    Encounter,
    JourneyProgress,
    Hero,
  },
};
</script>
