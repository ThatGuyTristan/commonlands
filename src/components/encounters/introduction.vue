<template lang="pug">
  v-row.justify-center
      p.mt-3.mx-6 {{ introText }}
      v-card-actions
        v-btn(@click="$emit('done')") Proceed
</template>

<script>
import texts from "@/assets/js/introduction.js"

export default {
  data: () => ({
    introText: texts
  })
}
</script>
