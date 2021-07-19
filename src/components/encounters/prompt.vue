<template lang="pug">
  v-row.justify-center
    v-tooltip(left)
      template(v-slot:activator="{ on }")
        v-btn.mr-2(v-on="on" plain color="success") Take a rest
      span Taking a Rest will not advance your journey, but Freeport will suffer while you delay.
    v-btn(plain) Continue on
</template>

<script>
export default {

}
</script>