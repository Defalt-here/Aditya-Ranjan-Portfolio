const routes = [
  {
    path: "/",
    children: [{ path: "", component: () => import("pages/homePage.vue") }],
  },
  {
    path: "/gamePage",
    children: [{ path: "", component: () => import("pages/gamePage.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
