import { createApp } from "vue";
import "ant-design-vue/dist/reset.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import dayjs from "dayjs";
import "dayjs/locale/en";
dayjs.locale("en");

createApp(App).use(router).mount("#app");
