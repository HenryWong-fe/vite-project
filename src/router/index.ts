import { createRouter, createWebHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    component: () => import("@/views/page/home/index.vue"),
    name: "Home",
    meta: { title: "首页", layout: "default" },
    children: [
      {
        path: "detail",
        component: () => import("@/views/page/detail/index.vue"),
        name: "Detail",
        meta: {
          title: "详情",
          layout: "default",
          icon: "el-icon-s-home",
          activeMenu: "/home",
        },
      },
    ],
  },
  {
    path: "/test",
    component: () => import("@/views/page/test/index.tsx"),
    name: "test",
    meta: { title: "测试", layout: "default" },
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory("/"),
  routes, // short for `routes: routes`
});
export default router;