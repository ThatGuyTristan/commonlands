<template lang="pug">
  v-container
    v-row(no-gutters)
      Monster
    v-row(no-gutters)
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
