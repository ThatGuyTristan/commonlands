<template lang="pug">
  v-container(fill-height)
    v-row(no-gutters)
      v-card.mx-auto(flat height="50%")
        Monster
    v-row(no-gutters)
      v-card.mx-auto(flat height="50%")
        Hero
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Monster from "@/components/Monster";
import Hero from "@/components/Hero";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Monster,
    Hero,
  },
};
</script>
