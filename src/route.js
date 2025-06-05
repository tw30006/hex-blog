import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/HomeView.vue";
import Article from "./components/Article.vue";
import Detail from "./components/Detail.vue";
const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/article",
    component: Article,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
