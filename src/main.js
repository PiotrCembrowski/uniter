import "./assets/main.css";
import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(VueGtag, {
  config: { id: "G-ZLDWN9CHBL" },
});

app.mount("#app");
