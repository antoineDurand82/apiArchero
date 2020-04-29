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
          path: "/users",
          name: "users",
          component: () => import("./components/UserComponent/UsersList")
        },
        {
          // /dashboard/users/:id
          path: "/users/:id",
          name: "user-details",
          component: () => import("./components/UserComponent/User")
        },
        {
          // /dashboard/users/:id
          path: "/users/add",
          name: "user-add",
          component: () => import("./components/UserComponent/AddUser")
        }
      ]
    },
  ]
});