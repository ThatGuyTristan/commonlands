<template lang="pug">
  div
    v-btn(class="primary" @click="usePotion") Potion!
</template>

<script>
  export default{
    methods: {
      usePotion(){
        console.log("Potion Used")
      }
    }
  }
</script>
