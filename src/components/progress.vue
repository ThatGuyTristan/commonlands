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
import { eventBus } from "@/main";
import encounters from "@/assets/js/encounters";

export default {
  components: {
    ProgressItem: () => import("./progressItem"),
  },
  name: "JourneyProgress",
  data: () => ({
    value: 0,
    events: [],
    encounters: encounters,
  }),
  methods: {
    addEvent(event) {
      console.log("Add event", event)
      this.events.push(event);
    },
  },
  computed: {
    steps() {
      return this.$store.state.journeySteps;
    },
  },
  created() {
    setInterval(() => {
      this.value++;
    }, 1500);
    eventBus.$on("finishEvent", this.addEvent);
  },
};
</script>
