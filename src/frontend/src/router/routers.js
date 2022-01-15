import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index, //() => import("../views/Index.vue"),
    meta: {
      layout: "AppLayoutMain",
      routeNameForLogin: "LoginModal",
      routeNameForUnauthorized: null,
    },
    children: [
      {
        path: "login-modal",
        name: "LoginModal",
        component: Login,
        meta: {
          layout: "AppLayoutMain",
          routeNameForLogin: "LoginModal",
          routeNameForUnauthorized: null,
        },
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      layout: "AppLayoutMain",
      routeNameForLogin: "Login",
      routeNameForUnauthorized: null,
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: {
      layout: "AppLayoutMain",
      routeNameForLogin: "Login",
      routeNameForUnauthorized: "Index",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      layout: "AppLayoutMainWithSidebar",
      routeNameForLogin: "Login",
      routeNameForUnauthorized: "Index",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login, //() => import("../views/Login.vue"),
    meta: {
      layout: "AppLayoutDefault",
      routeNameForLogin: null,
      routeNameForUnauthorized: null,
    },
  },
];

export default routes;
