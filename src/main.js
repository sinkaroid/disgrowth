import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
import "hchs-vue-charts";
import VueNumber from "vue-number-animation";
import axios from "axios";
Vue.prototype.$http = axios;

Vue.use(window.VueCharts);
Vue.use(VueNumber);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");