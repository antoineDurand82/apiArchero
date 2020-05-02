import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./components/Dashboard/Dashboard"),
      children: [
        // Routes for users
        {
          // /dashboard/users
          path: ":entityName",
          name: "modelsCRUD",
          component: () => import("./components/Dashboard/ModelsCRUD")
        }
      ]
    },
  ]
});