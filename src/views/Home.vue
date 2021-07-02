<template lang="pug">
  v-container(fill-height)
    v-row(no-gutters)
      v-card.mx-auto(flat height="70%")
        Encounter
    v-row(no-gutters)
      v-card.mx-auto(flat height="30%")
        Hero
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Encounter from "@/components/encounter";
import Hero from "@/components/Hero";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Encounter,
    Hero,
  },
};
</script>
