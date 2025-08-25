// src/router/config.ts
const routes = [
  { path: ["/", "/home"], exact: true, component: "Home" },

  // NEW: About page (aliases optional)
  { path: ["/about", "/o-nas"], exact: true, component: "About" },
];

export default routes;
