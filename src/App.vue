<template lang="pug">
  v-app
    v-app-bar(app dark)
      div.d-flex.align-center
        h1(id="mainTitle") the Commonlands
      v-spacer
      h3 A VueJS Playground App
    v-main(:style="backgroundStyle")
      router-view
    Snackbar
</template>

<script>
export default {
  components: {
    Snackbar: () => import("@/components/snackbar"),
  },
  name: "App",

  data: () => ({
    imageLoc: "@/assets/images/dark-wood.png",
    backgroundStyle: {
      backgroundImage: "url(" + require("@/assets/images/dark-wood.png") + ")",
      backgroundRepeat: "repeat",
      backgroundColor: "#4f3f00",
    },
    //
  }),
};
</script>

<style scoped>
#mainTitle {
  font-family: "BlackCastle";
}

.v-application {
  font-family: "oldEnglish";
  font-size: 24px;
}

.h3 {
  font-family: "Kelmscot";
}

@font-face {
  font-family: "oldEnglish";
  src: url("./assets/fonts/Old_Englished_Boots.ttf");
}

@font-face {
  font-family: "BlackCastle";
  src: url("./assets/fonts/BlackCastle.ttf");
}

@font-face {
  font-family: "Kelmscot";
  src: url("./assets/fonts/KELMSCOT.TTF");
}
</style>
