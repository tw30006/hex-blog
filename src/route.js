import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/HomeView.vue";
import Article from "./components/article.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
