import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/HomeView.vue";
import Article from "./components/Article.vue";
import Detail from "./components/Detail.vue";
const routes = [
  {
    path: "/hex-blog",
    component: HomeView,
  },
  {
    path: "/hex-blog/article",
    component: Article,
  },
  {
    path: "/hex-blog/detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
