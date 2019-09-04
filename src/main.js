import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap-vue"

Vue.config.productionTip = false;

Vue.use(bootstrap)//registration neeeded !!


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//by registering router & store here we can access them wiht $router, $store inside App !!!
