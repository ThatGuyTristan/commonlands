<template lang="pug">
  div.text-center.mx-8
    v-list
      v-list-item
        template(v-for="(step, i) in steps")
          v-list-item-content
            ProgressItem(:event="events[i]" :key="i")
          v-divider(role="presentation" v-if="(i + 1) < steps")
</template>

<script>
import encounters from "@/assets/js/encounters";

export default {
  components: {
    ProgressItem: () => import("./progressItem"),
  },
  name: "JourneyProgress",
  data: () => ({
    events: [],
    encounters: encounters,
  }),
  methods: {
    addEvent(event) {
      console.log("Add event", event);
      this.events.push(event);
    },
  },
  computed: {
    steps() {
      return this.$store.state.journeySteps;
    },
  },
  created() {
    this.$eventHub.$on("finishEvent", (event) => { this.addEvent(event)  }),
    this.$eventHub.$on("escorted", (event) => { 
      let steps = 4 - this.$store.state.difficulty
        for(let i = 0; i == steps; i++){
          console.log(i, event);
          this.addEvent(event)
        }
    })
  }
}
</script>