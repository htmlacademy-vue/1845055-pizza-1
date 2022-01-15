import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers.js";
// import Index from "../views/Index.vue";

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Index",
//     components: {
//       // users: Users,
//       // profile: Profile,
//       default: Index,
//     },
//   },
// ];

const router = new VueRouter({
  mode: "history",
  routes,
});
// console.log(router);

export default router;
