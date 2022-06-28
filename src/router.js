import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import VueChartJS from "@/views/VueChartJS";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/graph",
      component: Home
    },
    {
      path: "/graph",
      name: "VueChartJS",
      component: VueChartJS
    }
  ]
});
