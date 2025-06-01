import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/all.scss";
import router from "./route";

const app = createApp(App);

app.use(router);
app.mount("#app");
