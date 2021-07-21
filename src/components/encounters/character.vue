<template lang="pug">
  v-row.justify-center
    v-col.mx-auto(
        cols="6"
        v-if="show == 'name'"
      )
      v-text-field(v-model="name" dark
        label="Tell me your name..."
        @keyup.enter="setName()"
        @click:append="setName()"
        append-icon="mdi-arrow-right")
    v-col.mx-auto(v-else)
      v-btn.mx-2(plain color="success" @click="setCharacter(1)") A brave warrior
      v-btn.mr-2(plain @click="setCharacter(2)") A cunning ranger
      v-btn.ml-2(plain color="error" @click="setCharacter(3)") A jaded wizard
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "Character",
  data: () => ({
    name: null,
    show: "name",
  }),
  methods: {
    setName() {
      this.$store
        .dispatch("setName", this.name)
        .then(() => (this.show = "character"));
    },
    setCharacter(num) {
      this.$store
        .dispatch("setCharacter", num)
        .then(
          () => eventBus.$emit("characterSet"),
          eventBus.$emit("gainExperience", 15)
        );
    },
  },
  created() {
    eventBus.$emit("setEncounterString", "Who are you?");
  },
};
</script>
