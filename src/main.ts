import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import RegisterAntdCom from "./plugins/antd";
import modalRouter from "./plugins/modal-router/index";
import modalRoutes from "./router/modal-routes";
const app = createApp(App);

RegisterAntdCom(app);

app
  .use(store)
  .use(router)
  .use(modalRouter, {
    model: "show",
    delay: 300,
    routes: modalRoutes,
  })
  .mount("#app");
