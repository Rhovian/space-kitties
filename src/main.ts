import { createApp } from "vue";
import App from "./App.vue";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App)
  .use(AOS.init({ duration: 2000 }))
  .mount("#app");
