import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import EventHub from 'vue-event-hub';

Vue.mixin({
  methods: {
    rolld100: function () {
      return Math.random * 100;
    },
  },
});

Vue.prototype.$stamina = 0;

Vue.config.productionTip = false;

Vue.use(EventHub)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
