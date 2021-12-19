import { createApp } from "vue";
import App from "./App.vue";
import "@solana/wallet-adapter-vue-ui/styles.css";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  // You can set your default options here
};

createApp(App)
  .use(AOS.init({ duration: 1500 }))
  .use(Toast, options)
  .mount("#app");
