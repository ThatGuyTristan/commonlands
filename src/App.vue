<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Commonlands</h1>
      </div>

      <v-spacer></v-spacer>
      <h3>A VueJS Playground App</h3>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <snackbar></snackbar>
  </v-app>
</template>

<script>
export default {
  components: {
    Snackbar: () => import("@/components/snackbar"),
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
